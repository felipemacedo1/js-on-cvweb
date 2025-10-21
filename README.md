# 🚀 Dynamic Web Resume

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

**A minimalist, dynamic, and visually stunning web resume that automatically consumes and renders data from JSON.**

</div>

---

## ✨ Features

- 🎯 **100% Dynamic Rendering** - All data consumed from `data/db.json`
- 🎨 **Dark Theme** - Beautiful minimalist design with neon accents
- ⚡ **Lightning Fast** - Built with Vite and optimized for performance
- 📱 **Fully Responsive** - Looks great on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🔧 **Zero Configuration** - Just update the JSON and you're done
- 🔄 **Auto-Extensible** - New sections added to JSON appear automatically

---

## 🛠️ Tech Stack

- **Framework:** React 18.3 + TypeScript 5.7
- **Build Tool:** Vite 7.1
- **Styling:** TailwindCSS 3.4
- **Animations:** Framer Motion 11
- **Font:** JetBrains Mono (monospace)

---

## 🚀 Quick Start

### Installation

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

The app will be available at \`http://localhost:5173\`

### Build for Production

\`\`\`bash
npm run build
npm run preview
\`\`\`

---

## 📝 How It Works

### Dynamic Rendering

The \`SectionRenderer\` component automatically:
- Detects the data type (array, object, primitive)
- Applies appropriate rendering logic
- Uses specialized components when available
- Falls back to generic rendering for unknown sections

### Adding New Sections

Simply add a new key to \`db.json\` and it will appear automatically!

---

## 👨‍💻 Author

**Felipe Macedo**
- GitHub: [@felipemacedo1](https://github.com/felipemacedo1)
- LinkedIn: [felipemacedo1](https://www.linkedin.com/in/felipemacedo1/)

---

<div align="center">

**Built with hate in ❤️ & GitHub Copilot**

</div>
