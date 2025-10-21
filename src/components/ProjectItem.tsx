import { motion } from 'framer-motion';

interface ProjectItemProps {
  name?: string;
  description?: string;
  technologies?: string[];
  url?: string;
}

export const ProjectItem = ({ name, description, technologies, url }: ProjectItemProps) => {
  return (
    <motion.div
      className="card mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start mb-3">
        {name && <h3 className="text-xl font-bold text-dark-neon">{name}</h3>}
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dark-accent hover:text-dark-neon transition-colors"
            title="View project"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}
      </div>
      
      {description && <p className="text-dark-text mb-4 leading-relaxed">{description}</p>}
      
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="badge">
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
