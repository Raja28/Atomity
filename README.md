# 🌐 Atomity - Cloud Infrastructure Visualization

A modern, responsive, and animated **multi-cloud infrastructure dashboard** built with **React, Tailwind CSS, and Framer Motion**.

This project visually represents cloud providers like **AWS, Azure, Google Cloud, and On-Premise systems** along with resource monitoring.

## 🔗 Live Demo

[🌍 View Live Project](https://atomity-chi.vercel.app/)

---

## 🚀 Features

* ⚡ **Responsive Design** (Mobile → Desktop)
* 🔗 **Animated connection lines between cloud providers**
* ☁️ **Multi-cloud architecture visualization**
* ✨ **Smooth animations using Framer Motion**
* 🎨 **Custom design system using CSS variables**

---

## 🖼️ Preview

> Clean and interactive infrastructure diagram with real-time feel

* Central resource monitoring chart
* Four cloud environments:

  * AWS
  * Azure
  * Google Cloud
  * On-Premise

---

## 🛠️ Tech Stack

* **React.js**
* **Tailwind CSS (v4 with @theme)**
* **Framer Motion**
* **SVG for custom icons and diagrams**

---

## 📁 Project Structure

```
src/
│
├── components/infra
│   ├── CloudNode.jsx
│   ├── ConnectionLines.jsx
│   ├── InfrastructureDiagram.jsx
│   ├── NodeIcon.jsx
│   ├── ProviderLogos.jsx
│   ├── ResourceChart.jsx
│
├── hooks/
|  └── use-mobile.jsx
|
├── pages/
│   └── index.jsx
│
└── App.jsx
└── index.css
```

---

## 📱 Responsiveness

* 📲 **Mobile:** Grid-based stacked layout
* 💻 **Tablet/Desktop:** Absolute-positioned diagram
* 📏 Adaptive scaling using:
  * `aspect-ratio`
  * Tailwind breakpoints

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/Raja28/Atomity.git

# Navigate to project
cd atomity

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 👨‍💻 Author - Raja S

Built with focus on UI precision and scalability.

---

⭐ If you like this project, consider giving it a star!
