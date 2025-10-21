import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="section-container text-center py-12 border-t border-dark-border mt-12"
    >
      <p className="text-dark-muted">
        Built with <span className="text-red-500 animate-pulse">❤️</span> & GitHub Copilot
      </p>
      <p className="text-xs text-dark-muted mt-2">
        Powered by React + TypeScript + Vite + TailwindCSS + Framer Motion
      </p>
    </motion.footer>
  );
};
