import { useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiShield, FiCpu, FiTool, FiBox, FiSliders, FiAward } from 'react-icons/fi';
import PageTransition from '../components/PageTransition.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Pagination from '../components/Pagination.jsx';
import { products, categories } from '../data/products.js';
import { features } from '../data/company.js';

const PER_PAGE = 6;
const featureIcons = {
  protection: FiShield,
  terminals: FiTool,
  body: FiBox,
  ic: FiCpu,
  multi: FiSliders,
  warranty: FiAward,
};
const heroProduct = products[0];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function Home() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const gridRef = useRef(null);
  const category = params.get('category') || 'All';
  const page = Number(params.get('page')) || 1;

  const filtered = useMemo(
    () => (category === 'All' ? products : products.filter((p) => p.category === category)),
    [category]
  );
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  useEffect(() => {
    if (location.hash === '#products') {
      gridRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search, location.hash]);

  const update = (next) => {
    const merged = { category, page, ...next };
    const p = {};
    if (merged.category !== 'All') p.category = merged.category;
    if (merged.page > 1) p.page = merged.page;
    setParams(p, { replace: true, preventScrollReset: true });
  };

  const changePage = (p) => {
    update({ page: p });
    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <section className="hero">
        <div className="hero-bg">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <div className="grid-lines" />
        </div>
        <div className="container hero-inner">
          <motion.div className="hero-text" initial="hidden" animate="show">
            <motion.span className="eyebrow" variants={fadeUp} custom={0}>
              ⚡ Based on Japanese Technology
            </motion.span>
            <motion.h1 variants={fadeUp} custom={1}>
              Stable Power.<br />
              <span className="text-gradient">Safer Appliances.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2}>
              COSSICS manufactures premium Voltage Stabilizers, Servo Stabilizers, Constant Voltage
              Transformers and Power Boards — specially designed for DJ / PA, Mainline & Gadgets.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp} custom={3}>
              <a href="#products" className="btn btn-primary" onClick={(e) => { e.preventDefault(); gridRef.current?.scrollIntoView({ behavior: 'smooth' }); }}>
                Explore Products <FiArrowRight />
              </a>
              <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
            </motion.div>
            <motion.div className="hero-stats" variants={fadeUp} custom={4}>
              <div><strong>20+</strong><span>Years Experience</span></div>
              <div><strong>{products.length}+</strong><span>Product Ranges</span></div>
              <div><strong>2 Yrs</strong><span>Warranty</span></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="hero-hex" />
            <svg viewBox="0 0 64 64" className="hero-bolt">
              <path d="M36 4 14 36h14l-4 24 26-36H36z" />
            </svg>
            <motion.img
              src={heroProduct.image}
              alt={heroProduct.name}
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Link to={`/product/${heroProduct.id}`} className="hero-chip">
              <span className="pulse-dot" /> {heroProduct.name}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="marquee-group">
              {['Auto-Cut Voltage Stabilizer', 'Constant Voltage Transformer', 'Micro-Controlled Voltage Stabilizer', 'Automatic Voltage Stabilizer', 'Automatic Servo Voltage Stabilizer', 'Power Boards'].map((t) => (
                <span key={t}>⚡ {t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="products" ref={gridRef}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Range</span>
            <h2>Featured <span className="text-gradient">Products</span></h2>
            <p>Click on any product to view full specifications, models and capacities.</p>
          </div>

          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${c === category ? 'active' : ''}`}
                onClick={() => update({ category: c, page: 1 })}
              >
                {c === category && <motion.span layoutId="chip-active" className="chip-active" />}
                <span>{c}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <ProductCard key={`${category}-${page}-${p.id}`} product={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          <Pagination page={page} totalPages={totalPages} onChange={changePage} />
          <p className="page-info">
            Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} products
          </p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head light">
            <span className="eyebrow">Why COSSICS</span>
            <h2>Built to <span className="text-gradient">Protect</span></h2>
          </div>
          <div className="features">
            {features.map((f, i) => {
              const Icon = featureIcons[f.key];
              return (
                <motion.div
                  key={f.key}
                  className="feature"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="feature-icon"><Icon /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta">
        <motion.div
          className="container cta-inner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h2>Need the right stabilizer for your load?</h2>
            <p>Tell us your requirement and our experts will suggest the perfect COSSICS product.</p>
          </div>
          <Link to="/contact" className="btn btn-dark">Get a Free Quote <FiArrowRight /></Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
