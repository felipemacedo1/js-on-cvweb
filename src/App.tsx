import { useResumeData } from './hooks/useResumeData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SectionRenderer } from './components/SectionRenderer';
import { motion } from 'framer-motion';

function App() {
  const { data, loading, error } = useResumeData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="text-2xl text-dark-neon"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="terminal-cursor">Loading</span>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="card max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-2xl text-red-500 mb-4">Error Loading Resume</h2>
          <p className="text-dark-text">{error}</p>
        </motion.div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  // Define the preferred order of sections
  const sectionOrder = [
    'work',
    'education',
    'skills',
    'projects',
    'languages',
    'interests',
    'objectives'
  ];

  // Get all sections from data and sort them
  const sections = Object.keys(data)
    .filter(key => key !== 'basics')
    .sort((a, b) => {
      const indexA = sectionOrder.indexOf(a);
      const indexB = sectionOrder.indexOf(b);
      
      // If both are in the order list, sort by their position
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }
      
      // If only a is in the list, it comes first
      if (indexA !== -1) return -1;
      
      // If only b is in the list, it comes first
      if (indexB !== -1) return 1;
      
      // If neither is in the list, sort alphabetically
      return a.localeCompare(b);
    });

  return (
    <div className="min-h-screen">
      <Header basics={data.basics} />
      
      <main>
        {sections.map((sectionKey) => (
          <SectionRenderer
            key={sectionKey}
            sectionKey={sectionKey}
            sectionData={data[sectionKey]}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
