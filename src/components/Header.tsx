import { motion } from 'framer-motion';

interface HeaderProps {
  basics?: {
    name?: string;
    label?: string;
    summary?: string;
    location?: {
      city?: string;
      region?: string;
      country?: string;
    };
    profiles?: Array<{
      network?: string;
      username?: string;
      url?: string;
    }>;
  };
}

export const Header = ({ basics }: HeaderProps) => {
  if (!basics) return null;

  const { name, label, summary, location, profiles } = basics;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="section-container text-center"
    >
      {name && (
        <h1 className="text-5xl md:text-7xl font-bold text-gradient glow-text mb-4">
          {name}
        </h1>
      )}
      
      {label && (
        <p className="text-xl md:text-2xl text-dark-muted mb-6">
          {label}
        </p>
      )}

      {location && (
        <p className="text-dark-muted mb-6">
          📍 {location.city && `${location.city}, `}
          {location.region && `${location.region}, `}
          {location.country}
        </p>
      )}

      {profiles && profiles.length > 0 && (
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="badge link-external"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {profile.network}
            </motion.a>
          ))}
        </div>
      )}

      {summary && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-dark-text max-w-4xl mx-auto leading-relaxed"
        >
          {summary}
        </motion.p>
      )}

      <div className="divider"></div>
    </motion.header>
  );
};
