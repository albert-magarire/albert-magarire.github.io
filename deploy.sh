#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Ensure .nojekyll file exists in dist
echo "📝 Adding .nojekyll file to disable Jekyll processing..."
cp .nojekyll dist/

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your site should be live at: https://albert-magarire.github.io"
