# 🚀 Solo Portfolio Website

A modern, responsive portfolio website built using **React.js** and **Tailwind CSS**, inspired by clean product design and smooth developer workflows.

## 📸 Preview

![Portfolio Preview](./Layout-Idea-White.webp)

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **Tailwind CSS** – Utility-first styling
- **Vite** – Fast bundling and dev server
- **Dark Mode** – Fully themeable UI
- **Responsive Design** – Works across all screen sizes

## ✨ Features

- Personal intro section with headline
- Services / "What I offer" section
- Recent blog posts
- Dark mode toggle
- Clean grid layout using Tailwind
- Fully responsive and accessible

  For Brave browser users:

  You can add a small message:
  "If dark mode doesn't work, try turning off Brave Shields or use Chrome."
  (Just to save your future users confusion.)

  Keep the theme toggle clean using localStorage + useEffect → You already nailed this.

  Optional polish:

  Avoid flicker on first load (we can add a .no-transition class initially and remove it with JS).

  Animate background/text change smoothly (you’re already using Tailwind transitions well).

## 📂 Project Structure

```bash
src/
├── assets/          # Images & icons
├── components/      # Reusable UI components
├── pages/           # Main sections like Home, About
├── App.jsx          # Main entry component
├── main.jsx         # App bootstrap
└── index.css        # Tailwind base and custom styles
```

This Is The Actual Link Of The Live Working Site --- https://loopportforlio.netlify.app/
