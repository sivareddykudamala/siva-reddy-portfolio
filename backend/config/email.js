const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  // Validate required environment variables
  const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS'];
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    // Additional options for better compatibility
    tls: {
      rejectUnauthorized: false
    }
  });

  return transporter;
};

// Verify email configuration
const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email service is ready');
    return true;
  } catch (error) {
    console.error('❌ Email service configuration error:', error.message);
    return false;
  }
};

// Send email function
const sendEmail = async (mailOptions) => {
  try {
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
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw error;
  }
};

// Email templates
const emailTemplates = {
  // Contact form email template
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
            <p>💼 Portfolio: ${process.env.FRONTEND_URL || 'http://localhost:3001'}</p>
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
Portfolio: ${process.env.FRONTEND_URL || 'http://localhost:3001'}
    `
  }),
  
  // Auto-reply email template
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
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.FRONTEND_URL || 'http://localhost:3001'}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Visit My Portfolio
            </a>
          </div>
          
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

Portfolio: ${process.env.FRONTEND_URL || 'http://localhost:3001'}

Best regards,
K Venkata Siva Reddy
Software Engineer - II | Java & Microservices Specialist
📧 kudamalasivareddy@gmail.com | 📍 Chennai, India
    `
  })
};

module.exports = {
  createTransporter,
  verifyEmailConfig,
  sendEmail,
  emailTemplates
}; 