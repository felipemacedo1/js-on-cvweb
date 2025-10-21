import { motion } from 'framer-motion';

interface SkillItemProps {
  name?: string;
  keywords?: string[];
}

export const SkillItem = ({ name, keywords }: SkillItemProps) => {
  return (
    <motion.div
      className="card mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {name && <h3 className="text-lg font-bold text-dark-neon mb-3">{name}</h3>}
      {keywords && keywords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <span key={index} className="badge">
              {keyword}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
