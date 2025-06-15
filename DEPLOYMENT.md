# Vercel Deployment Guide

This guide will help you deploy your portfolio website to Vercel with serverless functions.

## 🚀 Quick Deploy

### 1. **Install Vercel CLI**
```bash
npm install -g vercel
```

### 2. **Navigate to Frontend Directory**
```bash
cd frontend
```

### 3. **Deploy to Vercel**
```bash
vercel
```

## 📧 **Environment Variables Setup**

After deploying, you need to configure environment variables in your Vercel dashboard:

### Required Environment Variables:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com
```

### Setting Environment Variables:

1. **Via Vercel Dashboard:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add each variable with the corresponding value

2. **Via CLI:**
   ```bash
   vercel env add EMAIL_HOST
   vercel env add EMAIL_PORT
   vercel env add EMAIL_SECURE
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add FROM_EMAIL
   vercel env add TO_EMAIL
   ```

## 🔐 **Gmail Setup for Contact Form**

### 1. **Enable 2-Factor Authentication**
- Go to your Google Account settings
- Security → 2-Step Verification → Turn on

### 2. **Generate App Password**
- Go to Google Account settings
- Security → 2-Step Verification → App passwords
- Select "Mail" and "Other" → Generate
- Use this password for `EMAIL_PASS`

### 3. **Environment Variables**
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=generated-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com
```

## 🌐 **Vercel Configuration**

The `vercel.json` file is already configured with:
- Static site build settings
- Serverless function configuration
- Routing rules
- Environment variable references

## 📁 **Project Structure**

```
frontend/
├── api/                     # Serverless functions
│   ├── contact.js          # Contact form handler
│   ├── projects.js         # Projects API
│   └── blog.js             # Blog API
├── src/                    # React application
├── public/                 # Static files
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies
```

## 🔄 **Automatic Deployments**

### GitHub Integration:
1. Connect your repository to Vercel
2. Push changes to main branch
3. Vercel automatically deploys

### Manual Deployment:
```bash
cd frontend
vercel --prod
```

## 🛠 **Local Development**

### 1. **Install Dependencies**
```bash
cd frontend
npm install
```

### 2. **Start Development Server**
```bash
npm start
```

### 3. **Test Serverless Functions Locally**
```bash
vercel dev
```

## 🎯 **API Endpoints**

Once deployed, your API endpoints will be:
- `https://your-app.vercel.app/api/contact` - Contact form
- `https://your-app.vercel.app/api/projects` - Projects data
- `https://your-app.vercel.app/api/blog` - Blog posts

## 🌟 **Custom Domain**

### Add Custom Domain:
1. Go to Vercel dashboard
2. Project Settings → Domains
3. Add your custom domain
4. Configure DNS settings

## 🔍 **Troubleshooting**

### Common Issues:

1. **Email not sending:**
   - Check Gmail app password
   - Verify environment variables
   - Check Vercel function logs

2. **Build failures:**
   - Check package.json dependencies
   - Verify React build process
   - Check Vercel build logs

3. **API not working:**
   - Verify serverless function syntax
   - Check CORS settings
   - Test functions locally with `vercel dev`

### Debug Commands:
```bash
# Check deployment status
vercel ls

# View function logs
vercel logs

# Check environment variables
vercel env ls
```

## 📊 **Performance**

### Optimizations:
- ✅ Serverless functions for instant scaling
- ✅ CDN for static assets
- ✅ Automatic compression
- ✅ Image optimization

### Free Tier Limits:
- **Bandwidth:** 100GB/month
- **Serverless Function Execution:** 100GB-Hrs/month
- **Build Time:** 100 minutes/month

## 🎉 **Success!**

Your portfolio is now deployed on Vercel with:
- ✅ React frontend
- ✅ Serverless API functions
- ✅ Contact form with email
- ✅ Projects and blog data
- ✅ Custom domain support
- ✅ Automatic deployments

Your live portfolio: `https://your-app.vercel.app` 