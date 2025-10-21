import { motion } from 'framer-motion';
import { formatDate } from '../utils/helpers';

interface EducationItemProps {
  institution?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
}

export const EducationItem = ({ institution, area, studyType, startDate, endDate }: EducationItemProps) => {
  return (
    <motion.div
      className="card mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {institution && <h3 className="text-xl font-bold text-dark-neon mb-2">{institution}</h3>}
      {area && <p className="text-lg text-dark-accent mb-2">{area}</p>}
      {studyType && <p className="text-sm text-dark-muted mb-2">{studyType}</p>}
      {(startDate || endDate) && (
        <p className="text-sm text-dark-muted">
          {startDate && formatDate(startDate)} {startDate && endDate && '-'} {endDate && formatDate(endDate)}
        </p>
      )}
    </motion.div>
  );
};
