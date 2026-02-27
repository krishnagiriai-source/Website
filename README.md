# 🔧 Aknitech Contact Page — Vercel 404 Fix Guide

## ❌ Why You Got 404: NOT_FOUND

Vercel serves static HTML sites by looking for **`index.html`** at the root of your project.
If your main file is named anything else (like `contact.html`), Vercel can't find an entry point and throws a **404**.

### The 3 Most Common Causes of 404 on Vercel (Static Sites)

| # | Mistake | Fix |
|---|---------|-----|
| 1 | Main file named `contact.html` instead of `index.html` | ✅ Rename to `index.html` |
| 2 | HTML file buried in a subfolder (e.g. `src/index.html`) | ✅ Move to project root OR set "Root Directory" in Vercel |
| 3 | No `vercel.json` when using custom routing | ✅ Add `vercel.json` (included in this project) |

---

## ✅ Correct Project Structure (This Repo)

```
aknitech-contact/          ← GitHub repo root
├── index.html             ← ✅ MUST be named index.html
├── vercel.json            ← ✅ Tells Vercel how to serve files
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

> **Golden Rule:** Vercel root = `index.html` must exist there.

---

## 🚀 Step-by-Step: Fix & Redeploy to GitHub + Vercel

### STEP 1 — Fix Your Local Files

```bash
# If your project is already on your computer:
cd aknitech-contact

# Rename contact.html → index.html  (THE CORE FIX)
# On Mac/Linux:
mv contact.html index.html

# On Windows (Command Prompt):
ren contact.html index.html

# On Windows (PowerShell):
Rename-Item contact.html index.html
```

### STEP 2 — Add vercel.json

Create a file called `vercel.json` in your project root with this content:

```json
{
  "version": 2,
  "builds": [
    { "src": "**/*", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/$1" }
  ]
}
```

### STEP 3 — Verify Your Folder Structure

```bash
# List files (Mac/Linux)
ls -la

# You should see:
# index.html      ← ✅
# vercel.json     ← ✅
# css/
# js/
```

### STEP 4 — Commit & Push to GitHub

```bash
# Stage all changes
git add .

# Commit with a clear message
git commit -m "fix: rename to index.html + add vercel.json to fix 404"

# Push to GitHub
git push origin main
```

> ✅ Vercel auto-detects the GitHub push and redeploys automatically!

### STEP 5 — Verify on Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. Click the **"Deployments"** tab
4. Wait for status to show ✅ **"Ready"**
5. Click **"Visit"** — your site should now load!

---

## 🛠️ Vercel Project Settings (Double-Check These)

In your Vercel project → **Settings** → **General**:

| Setting | Correct Value |
|---------|---------------|
| Framework Preset | **Other** (not Next.js, not React) |
| Root Directory | `.` (leave blank / dot) |
| Build Command | *(leave completely empty)* |
| Output Directory | *(leave completely empty)* |
| Install Command | *(leave completely empty)* |

---

## 🔁 If Still Getting 404 After Push

### Nuclear option — delete and re-import:

1. In Vercel dashboard → your project → **Settings** → scroll down → **"Delete Project"**
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click **"Import Git Repository"**
4. Select your GitHub repo
5. Set Framework: **Other**
6. Leave ALL build fields empty
7. Click **Deploy**

---

## 🏃 Run Locally (Zero Setup)

```bash
# Option 1: Just open the file
open index.html   # Mac
start index.html  # Windows

# Option 2: Python server (recommended)
python -m http.server 8080
# Visit: http://localhost:8080

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## ✅ Final Checklist Before Deploying

- [ ] Main file is named exactly `index.html` (lowercase)
- [ ] `index.html` is at the **root** of the repo (not in a subfolder)
- [ ] `vercel.json` is at the root of the repo
- [ ] Vercel Framework Preset is set to **"Other"**
- [ ] Build Command field is **empty**
- [ ] Output Directory field is **empty**
- [ ] GitHub push completed successfully (`git push origin main`)
- [ ] Vercel deployment shows ✅ "Ready" status
