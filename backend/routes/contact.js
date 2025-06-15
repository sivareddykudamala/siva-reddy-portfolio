const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const { sendEmail, emailTemplates } = require('../config/email');

const router = express.Router();

// Specific rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions. Please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Validation rules for contact form
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Subject must be between 5 and 100 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
];

// POST /api/contact - Send contact form message
router.post('/', contactLimiter, contactValidation, async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;
    
    // Sanitize input data
    const sanitizedData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject.trim(),
      message: message.trim()
    };

    // Log the contact attempt (for analytics/monitoring)
    console.log(`📧 New contact form submission from: ${sanitizedData.email}`);

    try {
      // Send email to yourself
      const contactEmailOptions = emailTemplates.contactForm(sanitizedData);
      await sendEmail(contactEmailOptions);

      // Send auto-reply to the user
      const autoReplyOptions = emailTemplates.autoReply(sanitizedData);
      await sendEmail(autoReplyOptions);

      // Return success response
      res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.',
        data: {
          name: sanitizedData.name,
          subject: sanitizedData.subject,
          timestamp: new Date().toISOString()
        }
      });

    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      // Return appropriate error message based on error type
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (emailError.code === 'EAUTH') {
        errorMessage = 'Email service configuration error. Please contact support.';
      } else if (emailError.code === 'ECONNECTION') {
        errorMessage = 'Email service is temporarily unavailable. Please try again later.';
      }
      
      res.status(500).json({
        success: false,
        error: errorMessage
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    next(error);
  }
});

// GET /api/contact/test - Test email configuration (development only)
router.get('/test', async (req, res, next) => {
  // Only allow in development environment
  if (process.env.NODE_ENV === 'production') {
    return res.status(404).json({
      success: false,
      error: 'Endpoint not found'
    });
  }

  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Email Configuration Test',
      message: 'This is a test message to verify email configuration is working properly.'
    };

    const emailOptions = emailTemplates.contactForm(testData);
    await sendEmail(emailOptions);

    res.status(200).json({
      success: true,
      message: 'Test email sent successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Test email failed:', error);
    res.status(500).json({
      success: false,
      error: 'Test email failed',
      details: error.message
    });
  }
});

// GET /api/contact/health - Check contact service health
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    service: 'Contact API',
    status: 'operational',
    features: {
      validation: 'active',
      rateLimit: 'active',
      emailService: 'configured'
    },
    timestamp: new Date().toISOString()
  });
});

module.exports = router; 