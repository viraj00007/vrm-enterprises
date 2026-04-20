# VRM Enterprises – Pharmaceutical Website

A modern, animated pharmaceutical website built with **Vite + React + Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
vrm-enterprises/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed navbar with mobile menu
│   │   ├── Hero.jsx         # Hero section with animated 3D vials
│   │   ├── Products.jsx     # 5 product cards with hover effects
│   │   ├── WhyUs.jsx        # Advantages section
│   │   ├── Contact.jsx      # Contact info + WhatsApp/Call CTAs
│   │   └── Footer.jsx       # Site footer
│   ├── hooks/
│   │   └── useAnimations.js # Scroll reveal + cursor glow hooks
│   ├── data.js              # Products, advantages, contact data
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind + animations
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| **Vite** | Ultra-fast build tool |
| **React 18** | Component-based UI |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Advanced animations (optional) |
| **Lucide React** | Icon library |

---

## ✏️ Customization

### Add/Edit Products
Edit `src/data.js` → `PRODUCTS` array.

### Change Colors
Edit CSS variables in `src/index.css` `:root` block.

### Update Contact Info
Edit `src/data.js` → `CONTACT` object.

---

## 🌐 Deploy

### Netlify (Recommended — Free)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## 📞 Contact

**VRM Enterprises** — Meerut, Uttar Pradesh  
📞 +91 9019531240 | +91 8755599910
