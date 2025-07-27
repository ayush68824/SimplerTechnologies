@echo off
echo ========================================
echo Pushing to GitHub Repository
echo ========================================
echo.

cd /d "%~dp0"

echo Current directory: %CD%
echo.

echo Checking Git status...
git status
echo.

echo Pushing to GitHub...
echo.
echo When prompted for credentials:
echo Username: ayush68824
echo Password: Use your Personal Access Token (not GitHub password)
echo.

git push -u origin main

echo.
echo ========================================
echo Push completed!
echo ========================================
pause 