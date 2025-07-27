# Push to GitHub Guide

## Step 1: Generate Personal Access Token
1. Go to GitHub.com and sign in
2. Click your profile picture → Settings
3. Scroll down to "Developer settings" (bottom left)
4. Click "Personal access tokens" → "Tokens (classic)"
5. Click "Generate new token" → "Generate new token (classic)"
6. Give it a name like "SimplerTechnologies Push"
7. Select scopes: `repo` (full control of private repositories)
8. Click "Generate token"
9. **COPY THE TOKEN** (you won't see it again!)

## Step 2: Push the Code
Run these commands in your terminal:

```bash
cd frontend-tasks
git push -u origin main
```

When prompted:
- Username: `ayush68824`
- Password: **Paste your personal access token** (not your GitHub password)

## Alternative: Use GitHub CLI
If you have GitHub CLI installed:
```bash
gh auth login
gh repo create ayush68824/SimplerTechnologies --public --source=. --remote=origin --push
```

## What Will Be Pushed:
- Complete React application with all three components
- SignUp Form with validation
- Navigation Bar with responsive design
- UserCard components with interactive buttons
- All CSS styles and modern UI
- README.md with documentation 