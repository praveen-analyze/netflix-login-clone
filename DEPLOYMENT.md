# 🚀 Deployment Guide for Expree

## Backend Deployment - Render

### Step 1: Prepare the Repository
```bash
cd app
git add .
git commit -m "Setup deployment configuration"
git push origin main
```

### Step 2: Deploy Backend to Render
1. Go to [https://render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click **"New +"** → **"Web Service"**
4. Connect your GitHub repository
5. Select the repository branch (main)
6. Configure:
   - **Name**: `expree-server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `server`
7. Click **"Create Web Service"**
8. Wait for deployment (3-5 minutes)
9. Copy your Render URL (e.g., `https://expree-server.onrender.com`)

### Step 3: Update Frontend with Backend URL
After getting your Render URL, update `vercel.json` in the client folder:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "https://YOUR-RENDER-URL.onrender.com"
  }
}
```

---

## Frontend Deployment - Vercel

### Step 1: Prepare Environment Variables
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"Add New"** → **"Project"**
4. Import your repository from GitHub

### Step 2: Configure Project Settings
1. **Root Directory**: `client`
2. **Framework Preset**: Vite
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`

### Step 3: Add Environment Variables
In Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://YOUR-RENDER-URL.onrender.com`
3. Click **"Save"**

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait for deployment (2-3 minutes)
3. Once complete, you'll get your Vercel URL

---

## Testing Deployed Application

1. Open your Vercel frontend URL
2. Test credentials:
   - Username: `praveen`
   - Password: `123`
3. Verify:
   - ✅ Login works
   - ✅ Success page displays
   - ✅ Fail page shows on wrong credentials
   - ✅ Logout redirects to home

---

## Important Notes

- **Render Free Tier**: Spins down after 15 mins of inactivity (slight delay on first request)
- **Vercel Free Tier**: Unlimited deployments, automatic HTTPS
- **CORS**: Already enabled on backend for all origins
- **Environment Variables**: Different for dev (localhost:3000) and production (Render URL)

---

## Troubleshooting

### "Cannot connect to server" error
- Check if Render deployment is complete
- Verify VITE_API_URL in Vercel environment variables
- Check Render dashboard for deployment errors

### Login not working in production
- Ensure credentials are correct (praveen/123)
- Check browser console for API errors
- Verify network tab shows request to correct API URL

### CORS errors
- Backend already has CORS enabled
- If error persists, ensure backend is running on Render

---

## Deployment Summary

| Component | Platform | URL |
|-----------|----------|-----|
| Backend | Render | `https://expree-server.onrender.com` |
| Frontend | Vercel | `https://your-app.vercel.app` |
