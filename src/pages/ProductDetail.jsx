import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle, FiZap, FiMail, FiPhoneCall } from 'react-icons/fi';
import PageTransition from '../components/PageTransition.jsx';
import ProductCard from '../components/ProductCard.jsx';
import NotFound from './NotFound.jsx';
import { getProduct, products } from '../data/products.js';
import { company } from '../data/company.js';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProduct(id);
  const [zoom, setZoom] = useState(false);

  if (!product) return <NotFound />;

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <PageTransition>
      <section className="page-hero small">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> / <Link to={`/?category=${encodeURIComponent(product.category)}#products`}>{product.category}</Link> / <span>{product.name}</span>
          </div>
        </div>
      </section>

      <section className="section detail">
        <div className="container">
          <button className="back-btn" onClick={() => navigate(-1)}><FiArrowLeft /> Back</button>
          <div className="detail-grid">
            <motion.div
              className="detail-media"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setZoom(true)}
            >
              <div className="detail-glow" />
              <motion.img
                src={product.image}
                alt={product.name}
                whileHover={{ scale: 1.05 }}
              />
              <span className="zoom-hint">Click to zoom</span>
            </motion.div>

            <motion.div
              className="detail-info"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="card-badge static">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="detail-desc">{product.description}</p>

              <h3 className="detail-sub">Technical Specifications</h3>
              <div className="spec-grid">
                {Object.entries(product.specs).map(([k, v], i) => (
                  <motion.div
                    key={k}
                    className="spec"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <span>{k}</span>
                    <strong>{v}</strong>
                  </motion.div>
                ))}
              </div>

              <div className="detail-actions">
                <Link to="/contact" state={{ product: product.name }} className="btn btn-primary">
                  <FiMail /> Enquire Now
                </Link>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="btn btn-ghost dark">
                  <FiPhoneCall /> Call Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="detail-lower">
            <motion.div
              className="panel"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="detail-sub">Available Models</h3>
              <table className="models-table">
                <thead>
                  <tr><th>#</th><th>Model No.</th><th>Capacity</th></tr>
                </thead>
                <tbody>
                  {product.models.map((m, i) => (
                    <tr key={m.model + i}>
                      <td>{i + 1}</td>
                      <td>{m.model}</td>
                      <td><span className="cap"><FiZap /> {m.capacity}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div
              className="panel"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="detail-sub">Key Features</h3>
              <ul className="feature-list">
                {product.features.map((f) => (
                  <li key={f}><FiCheckCircle /> {f}</li>
                ))}
              </ul>
              <div className="warranty-box">
                <strong>2 Years Warranty</strong>
                <span>Based on Japanese Technology</span>
              </div>
            </motion.div>
          </div>

          {related.length > 0 && (
            <div className="related">
              <h2>Related <span className="text-gradient">Products</span></h2>
              <div className="grid">
                {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </section>

      {zoom && (
        <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setZoom(false)}>
          <motion.img
            src={product.image}
            alt={product.name}
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 180 }}
          />
        </motion.div>
      )}
    </PageTransition>
  );
}
