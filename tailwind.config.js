export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0e1116',
        'dark-surface': '#161b22',
        'dark-border': '#30363d',
        'dark-text': '#e5e7eb',
        'dark-muted': '#8b949e',
        'dark-accent': '#58a6ff',
        'dark-neon': '#7ee787',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-neon': 'pulseNeon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(126, 231, 135, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(126, 231, 135, 0.8)' },
        },
      },
    },
  },
}
