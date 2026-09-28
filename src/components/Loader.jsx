import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.6 } }}
    >
      <div className="loader-ring">
        <span />
        <span />
        <svg viewBox="0 0 64 64" className="loader-bolt">
          <path d="M36 4 14 36h14l-4 24 26-36H36z" />
        </svg>
      </div>
      <motion.img
        src={logo}
        alt="COSSICS"
        className="loader-logo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
      <div className="loader-bar">
        <motion.div
          className="loader-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
      <p className="loader-text">Powering up...</p>
    </motion.div>
  );
}
