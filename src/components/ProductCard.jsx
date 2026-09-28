import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiZap } from 'react-icons/fi';

export default function ProductCard({ product, index }) {
  const capacities = product.models.map((m) => m.capacity);
  const range = capacities.length > 1 ? `${capacities[0]} – ${capacities[capacities.length - 1]}` : capacities[0];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className="card"
    >
      <Link to={`/product/${product.id}`} className="card-link">
        <div className="card-media">
          <span className="card-badge">{product.category}</span>
          <div className="card-glow" />
          <motion.img
            src={product.image}
            alt={product.name}
            loading="lazy"
            whileHover={{ scale: 1.08, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </div>
        <div className="card-body">
          <h3>{product.name}</h3>
          <p>{product.short}</p>
          <div className="card-meta">
            <span><FiZap /> {range}</span>
            <span>{product.specs['Input Range'] || product.specs.Range || product.specs.Ways}</span>
          </div>
          <span className="card-cta">
            View Details <FiArrowRight />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
