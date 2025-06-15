#!/bin/bash

# Portfolio Setup Script
echo "🚀 Setting up your Personal Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo "✅ npm $(npm --version) detected"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Copy environment files
echo "⚙️ Setting up environment files..."

# Copy backend env file
if [ ! -f backend/.env ]; then
    cp backend/env.example backend/.env
    echo "✅ Created backend/.env from template"
    echo "⚠️  Please update backend/.env with your email credentials"
else
    echo "⚠️  backend/.env already exists, skipping..."
fi

# Copy frontend env file
if [ ! -f frontend/.env ]; then
    cp frontend/env.example frontend/.env
    echo "✅ Created frontend/.env from template"
else
    echo "⚠️  frontend/.env already exists, skipping..."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update your personal information in frontend/src/data/portfolioData.js"
echo "2. Configure email settings in backend/.env"
echo "3. Replace placeholder images with your actual photos"
echo "4. Update social media links and contact information"
echo ""
echo "🚀 To start development:"
echo "   npm run dev"
echo ""
echo "📖 For more information, see README.md" 