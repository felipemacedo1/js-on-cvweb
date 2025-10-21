import { motion } from 'framer-motion';
import { formatDate } from '../utils/helpers';

interface WorkItemProps {
  position?: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  technologies?: string[];
}

export const WorkItem = ({ position, organization, startDate, endDate, summary, technologies }: WorkItemProps) => {
  return (
    <motion.div
      className="card mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
        <div>
          {position && <h3 className="text-xl font-bold text-dark-neon">{position}</h3>}
          {organization && <p className="text-lg text-dark-accent">{organization}</p>}
        </div>
        {(startDate || endDate) && (
          <p className="text-sm text-dark-muted mt-2 md:mt-0">
            {startDate ? formatDate(startDate) : ''}
            {startDate && endDate ? ' - ' : ''}
            {endDate ? formatDate(endDate) : 'Present'}
          </p>
        )}
      </div>
      
      {summary && <p className="text-dark-text mb-4 leading-relaxed">{summary}</p>}
      
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
