import { motion } from 'framer-motion';
import { capitalize, isArray, isObject, isPrimitive } from '../utils/helpers';
import { WorkItem } from './WorkItem';
import { EducationItem } from './EducationItem';
import { SkillItem } from './SkillItem';
import { ProjectItem } from './ProjectItem';

interface SectionRendererProps {
  sectionKey: string;
  sectionData: any;
}

export const SectionRenderer = ({ sectionKey, sectionData }: SectionRendererProps) => {
  // Skip rendering for 'basics' as it's handled by Header
  if (sectionKey === 'basics' || !sectionData) {
    return null;
  }

  const renderContent = () => {
    // Handle arrays of items
    if (isArray(sectionData)) {
      // Special rendering for known sections
      if (sectionKey === 'work') {
        return sectionData.map((item: any, index: number) => (
          <WorkItem key={index} {...item} />
        ));
      }

      if (sectionKey === 'education') {
        return sectionData.map((item: any, index: number) => (
          <EducationItem key={index} {...item} />
        ));
      }

      if (sectionKey === 'skills') {
        return sectionData.map((item: any, index: number) => (
          <SkillItem key={index} {...item} />
        ));
      }

      if (sectionKey === 'projects') {
        return sectionData.map((item: any, index: number) => (
          <ProjectItem key={index} {...item} />
        ));
      }

      if (sectionKey === 'languages') {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sectionData.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-dark-neon">{item.language || item.name}</h3>
                {item.fluency && <p className="text-dark-muted">{item.fluency}</p>}
              </motion.div>
            ))}
          </div>
        );
      }

      if (sectionKey === 'interests') {
        return (
          <div className="flex flex-wrap gap-3">
            {sectionData.map((item: any, index: number) => (
              <motion.span
                key={index}
                className="badge text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {typeof item === 'string' ? item : item.name || JSON.stringify(item)}
              </motion.span>
            ))}
          </div>
        );
      }

      // Generic array rendering
      return sectionData.map((item: any, index: number) => (
        <motion.div
          key={index}
          className="card mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {isObject(item) ? (
            Object.entries(item).map(([key, value]) => (
              <div key={key} className="mb-2">
                <span className="text-dark-neon font-semibold">{capitalize(key)}: </span>
                <span className="text-dark-text">
                  {isArray(value) ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(value as any[]).map((v, i) => (
                        <span key={i} className="badge">{String(v)}</span>
                      ))}
                    </div>
                  ) : (
                    String(value)
                  )}
                </span>
              </div>
            ))
          ) : (
            <p className="text-dark-text">{String(item)}</p>
          )}
        </motion.div>
      ));
    }

    // Handle objects with nested content
    if (isObject(sectionData)) {
      // Special handling for objectives
      if (sectionKey === 'objectives') {
        return (
          <div className="space-y-6">
            {Object.entries(sectionData).map(([key, value], index) => (
              <motion.div
                key={key}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-dark-neon mb-2">{capitalize(key)}</h3>
                <p className="text-dark-text leading-relaxed">{String(value)}</p>
              </motion.div>
            ))}
          </div>
        );
      }

      // Generic object rendering
      return (
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {Object.entries(sectionData).map(([key, value]) => (
            <div key={key} className="mb-3">
              <span className="text-dark-neon font-semibold">{capitalize(key)}: </span>
              <span className="text-dark-text">
                {isArray(value) ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {(value as any[]).map((v, i) => (
                      <span key={i} className="badge">{String(v)}</span>
                    ))}
                  </div>
                ) : isObject(value) ? (
                  <div className="ml-4 mt-2">
                    {Object.entries(value as object).map(([k, v]) => (
                      <div key={k}>
                        <span className="text-dark-accent">{capitalize(k)}: </span>
                        {String(v)}
                      </div>
                    ))}
                  </div>
                ) : (
                  String(value)
                )}
              </span>
            </div>
          ))}
        </motion.div>
      );
    }

    // Handle primitive values
    if (isPrimitive(sectionData)) {
      return (
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-dark-text">{String(sectionData)}</p>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <section className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {capitalize(sectionKey)}
      </motion.h2>
      {renderContent()}
      <div className="divider"></div>
    </section>
  );
};
