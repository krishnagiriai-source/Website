# AKNItech – Contact Page (Static Frontend)

A clean, responsive static replica of the [AKNItech Contact Page](https://aknitech.in/contact.html) built with semantic HTML5, modern CSS (custom properties, grid, flexbox), and vanilla JavaScript — no build tools, no frameworks, no backend.

---

## 📁 Project Structure

```
aknitech-contact/
├── contact.html          # Main page (open this in your browser)
├── css/
│   └── style.css         # All styles – variables, layout, responsive
├── js/
│   └── main.js           # Nav toggle, form validation, scroll reveal
└── README.md             # This file
```

---

## 🚀 Run Locally

### Option 1 – Open Directly (zero setup)

1. Download or clone this repository.
2. Double-click **`contact.html`** to open it in your browser.

> ✅ No server required. All assets load from CDNs (Google Fonts, Font Awesome).

---

### Option 2 – Live Server (recommended for development)

If you have **VS Code** installed:

1. Install the **Live Server** extension (by Ritwick Dey).
2. Right-click `contact.html` → **"Open with Live Server"**.
3. The page opens at `http://127.0.0.1:5500/contact.html`.

---

### Option 3 – Python Simple Server

```bash
# Navigate into the project folder
cd aknitech-contact

# Python 3
python -m http.server 8080

# Then visit: http://localhost:8080/contact.html
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 – Initialize Git

```bash
cd aknitech-contact
git init
git add .
git commit -m "feat: initial contact page"
```

### Step 2 – Create GitHub Repository

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `aknitech-contact` (or any name you prefer).
3. Set to **Public** (required for free GitHub Pages).
4. Click **"Create repository"**.

### Step 3 – Push to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/aknitech-contact.git
git branch -M main
git push -u origin main
```

### Step 4 – Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (left sidebar).
3. Under **"Build and deployment"**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
4. Click **Save**.
5. Wait ~60 seconds. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/aknitech-contact/contact.html
   ```

---

## ▲ Deploy to Vercel

### Option A – Vercel Dashboard (No CLI needed)

1. Go to [vercel.com](https://vercel.com) and sign in (use your GitHub account).
2. Click **"Add New…"** → **"Project"**.
3. Click **"Import Git Repository"** → select `aknitech-contact`.
4. Vercel will auto-detect it as a **static site** (no framework needed).
5. Leave all settings as default:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty)*
6. Click **"Deploy"**.
7. Your site is live at: `https://aknitech-contact.vercel.app`

---

### Option B – Vercel CLI

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login
vercel login

# 3. From project root, deploy
cd aknitech-contact
vercel

# Follow the prompts:
# - Set up and deploy: Y
# - Which scope: (your account)
# - Link to existing project: N
# - Project name: aknitech-contact
# - Directory: ./
# - Override settings: N

# 4. Production deploy
vercel --prod
```

---

## ✨ Features

| Feature | Details |
|---|---|
| **Responsive** | Mobile-first CSS grid/flex layout |
| **Navigation** | Sticky header, mega dropdowns, mobile hamburger accordion |
| **Hero** | Animated grid background, breadcrumb |
| **Contact Form** | Full Name, Mobile, Email, Service, Message — with real-time JS validation |
| **Contact Info** | Address, phone, email, hours, WhatsApp CTA, embedded map |
| **Footer** | Multi-column layout with quick-send form |
| **Animations** | Scroll-reveal via IntersectionObserver, CSS keyframes |
| **Accessibility** | Semantic HTML5, ARIA labels, `:focus-visible` styles |
| **No dependencies** | Vanilla JS, CSS custom properties, Google Fonts CDN |

---

## 🔧 Customization

- **Colors** – Edit CSS variables in `:root {}` inside `css/style.css`.
- **Fonts** – Swap Google Fonts links in `<head>` and update `--font-display` / `--font-body`.
- **Form submission** – Replace `fakeSend()` in `js/main.js` with a real service:
  - [Formspree](https://formspree.io) (free tier available)
  - [EmailJS](https://www.emailjs.com)
  - A `mailto:` action as a simple fallback

---

## 📄 License

Static frontend clone for portfolio / educational purposes. All brand identity belongs to [Aknitech](https://aknitech.in).
