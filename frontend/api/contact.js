const nodemailer = require('nodemailer');

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email templates
const emailTemplates = {
  contactForm: (data) => ({
    to: process.env.TO_EMAIL,
    subject: `K Venkata Siva Reddy Portfolio - ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Portfolio Contact</h1>
          <p style="color: #e8f0fe; margin: 10px 0 0 0;">Software Engineer Portfolio</p>
        </div>
        
        <div style="padding: 30px; background-color: #f8f9fa;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
          
          <div style="margin: 20px 0;">
            <strong style="color: #667eea;">Name:</strong>
            <p style="margin: 5px 0; font-size: 16px;">${data.name}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <strong style="color: #667eea;">Email:</strong>
            <p style="margin: 5px 0; font-size: 16px;">
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <strong style="color: #667eea;">Subject:</strong>
            <p style="margin: 5px 0; font-size: 16px;">${data.subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <strong style="color: #667eea;">Message:</strong>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #667eea;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 14px; color: #6c757d;">
            <p>📧 Sent from K Venkata Siva Reddy's Portfolio Contact Form</p>
            <p>🕒 Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `,
    text: `
New Portfolio Contact - K Venkata Siva Reddy

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from K Venkata Siva Reddy's Portfolio Contact Form
Timestamp: ${new Date().toLocaleString()}
    `
  }),
  
  autoReply: (data) => ({
    to: data.email,
    subject: 'Thank you for contacting K Venkata Siva Reddy!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Reaching Out!</h1>
          <p style="color: #e8f0fe; margin: 10px 0 0 0;">K Venkata Siva Reddy - Software Engineer</p>
        </div>
        
        <div style="padding: 30px; background-color: #f8f9fa;">
          <h2 style="color: #333;">Hi ${data.name},</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Thank you for reaching out through my portfolio! I'm excited to connect with you and appreciate your interest in my work as a Software Engineer specializing in Java, Spring Boot, and microservices architecture.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="color: #667eea; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong> ${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            I typically respond within 24-48 hours. In the meantime, feel free to explore my experience with enterprise-grade applications, microservices, and data migration projects on my portfolio.
          </p>
          
          <div style="background: #e8f0fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #667eea; margin-top: 0;">About Me:</h4>
            <p style="margin: 0; color: #555; font-size: 14px;">
              Software Engineer - II at Opsera with 3+ years of experience in Java, Spring Boot, and microservices. 
              Passionate about building scalable solutions and optimizing system performance.
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 14px; color: #6c757d; text-align: center;">
            <p>Best regards,<br><strong>K Venkata Siva Reddy</strong></p>
            <p>Software Engineer - II | Java & Microservices Specialist</p>
            <p>📧 kudamalasivareddy@gmail.com | 📍 Chennai, India</p>
          </div>
        </div>
      </div>
    `,
    text: `
Hi ${data.name},

Thank you for reaching out through my portfolio! I'm excited to connect with you and appreciate your interest in my work as a Software Engineer specializing in Java, Spring Boot, and microservices architecture.

Your message: "${data.subject}"
${data.message.substring(0, 200)}${data.message.length > 200 ? '...' : ''}

I typically respond within 24-48 hours. In the meantime, feel free to explore my experience with enterprise-grade applications, microservices, and data migration projects on my portfolio.

Best regards,
K Venkata Siva Reddy
Software Engineer - II | Java & Microservices Specialist
📧 kudamalasivareddy@gmail.com | 📍 Chennai, India
    `
  })
};

// Validation function
const validateContactForm = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 50) {
    errors.push('Name must be between 2 and 50 characters');
  }
  
  if (!data.name || !/^[a-zA-Z\s]+$/.test(data.name.trim())) {
    errors.push('Name can only contain letters and spaces');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email address');
  }
  
  if (!data.subject || data.subject.trim().length < 5 || data.subject.trim().length > 100) {
    errors.push('Subject must be between 5 and 100 characters');
  }
  
  if (!data.message || data.message.trim().length < 10 || data.message.trim().length > 1000) {
    errors.push('Message must be between 10 and 1000 characters');
  }
  
  return errors;
};

// Send email function
const sendEmail = async (mailOptions) => {
  const transporter = createTransporter();
  
  // Default from address if not provided
  if (!mailOptions.from) {
    mailOptions.from = `"Portfolio Contact" <${process.env.FROM_EMAIL}>`;
  }

  const info = await transporter.sendMail(mailOptions);
  console.log('✅ Email sent successfully:', info.messageId);
  
  return {
    success: true,
    messageId: info.messageId,
    response: info.response
  };
};

// Main handler function
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Handle GET request - Health check
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      service: 'Contact API',
      status: 'operational',
      timestamp: new Date().toISOString()
    });
  }
  
  // Handle POST request - Send contact form
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      const errors = validateContactForm({ name, email, subject, message });
      if (errors.length > 0) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors
        });
      }
      
      // Sanitize input data
      const sanitizedData = {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        subject: subject.trim(),
        message: message.trim()
      };
      
      console.log(`📧 New contact form submission from: ${sanitizedData.email}`);
      
      try {
        // Send email to yourself
        const contactEmailOptions = emailTemplates.contactForm(sanitizedData);
        await sendEmail(contactEmailOptions);

        // Send auto-reply to the user
        const autoReplyOptions = emailTemplates.autoReply(sanitizedData);
        await sendEmail(autoReplyOptions);

        // Return success response
        return res.status(200).json({
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
        
        let errorMessage = 'Failed to send message. Please try again later.';
        
        if (emailError.code === 'EAUTH') {
          errorMessage = 'Email service configuration error. Please contact support.';
        } else if (emailError.code === 'ECONNECTION') {
          errorMessage = 'Email service is temporarily unavailable. Please try again later.';
        }
        
        return res.status(500).json({
          success: false,
          error: errorMessage
        });
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error'
      });
    }
  }
  
  // Method not allowed
  return res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
} 