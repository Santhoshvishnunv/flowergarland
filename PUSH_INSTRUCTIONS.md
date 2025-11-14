# How to Push to GitHub

Your code is ready to push, but you need to authenticate with GitHub first.

## Option 1: Use Personal Access Token (Recommended)

1. **Create a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "flower-garland-push"
   - Select scope: **repo** (check the box)
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

2. **Push using the token:**
   ```bash
   git push -u origin main
   ```
   - When prompted for username: Enter `Santhoshvishnunv`
   - When prompted for password: **Paste your personal access token** (not your GitHub password)

## Option 2: Update Windows Credentials

1. Open **Windows Credential Manager**
   - Press `Win + R`, type `control /name Microsoft.CredentialManager`
   - Or search "Credential Manager" in Start menu

2. Go to **Windows Credentials**

3. Find any GitHub entries and remove them

4. Try pushing again:
   ```bash
   git push -u origin main
   ```
   - Enter your GitHub username: `Santhoshvishnunv`
   - Enter your personal access token as password

## Option 3: Use GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Add the repository
4. Push from the GUI

## Quick Command

After setting up authentication, just run:
```bash
git push -u origin main
```

Your repository is at: https://github.com/Santhoshvishnunv/flowergarland



