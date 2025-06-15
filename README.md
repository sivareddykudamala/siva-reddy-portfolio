# Personal Portfolio Website

A modern, responsive personal portfolio website built with React (frontend) and Node.js (backend).

## Features

- 🏠 **Home Page** - Clean landing section with intro and photo
- 👤 **About Section** - Bio, skills, education information
- 💼 **Projects Section** - Showcase projects with GitHub links and tech stack
- 💻 **Experience Section** - Timeline of companies and roles
- 📧 **Contact Section** - Form that sends messages to email
- 📝 **Blog** - Simple blog with Markdown support (optional)

## Tech Stack

### Frontend
- React 18 with hooks
- TailwindCSS for styling
- React Router for navigation
- Axios for API calls

### Backend
- Node.js with Express
- Nodemailer for email functionality
- CORS for cross-origin requests
- Environment variables for configuration

## Project Structure

```
portfolio/
├── frontend/                 # React frontend application
│   ├── public/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API calls and utilities
│   │   ├── data/           # Dummy data and constants
│   │   └── styles/         # Global styles
│   ├── package.json
│   └── tailwind.config.js
├── backend/                  # Node.js backend API
│   ├── routes/              # API routes
│   ├── controllers/         # Route handlers
│   ├── middleware/          # Custom middleware
│   ├── config/             # Configuration files
│   ├── package.json
│   └── server.js
├── README.md
└── .gitignore
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Configuration**
   ```bash
   # In backend directory, create .env file
   cp .env.example .env
   # Edit .env with your email credentials
   ```

### Development

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```

The frontend will run on `http://localhost:3000` and backend on `http://localhost:5000`.

### Production Build

1. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start Backend**
   ```bash
   cd backend
   npm start
   ```

## Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Render/Railway)
- Push to GitHub
- Connect repository to Render or Railway
- Set environment variables
- Deploy

## Environment Variables

### Backend (.env)
```
PORT=5000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
TO_EMAIL=your-email@gmail.com
FRONTEND_URL=http://localhost:3000
```

## Features Overview

- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Modern UI/UX** - Clean, professional design
- **Contact Form** - Functional email sending capability
- **Portfolio Showcase** - Project cards with GitHub integration
- **Experience Timeline** - Professional background display
- **Fast Loading** - Optimized for performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 