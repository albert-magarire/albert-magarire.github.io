import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting deployment to GitHub Pages...');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Build the project
  console.log('📦 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Ensure .nojekyll file exists in dist
  console.log('📝 Adding .nojekyll file to disable Jekyll processing...');
  fs.writeFileSync(path.join('dist', '.nojekyll'), '');

  // Deploy to GitHub Pages
  console.log('🌐 Deploying to GitHub Pages...');
  execSync('gh-pages -d dist --dotfiles', { stdio: 'inherit' });

  console.log('✅ Deployment complete!');
  console.log('🌍 Your site should be live at: https://albert-magarire.github.io');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
