import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import PageTransition from '../components/PageTransition.jsx';
import { products } from '../data/products.js';

const values = [
  { icon: FiTarget, title: 'Our Mission', text: 'To deliver quality-driven power protection solutions that keep every home, business and event running safely.' },
  { icon: FiEye, title: 'Our Vision', text: 'To be India\u2019s most trusted name in voltage stabilizers and transformers through innovation and reliability.' },
  { icon: FiHeart, title: 'Our Values', text: 'Honest products, strong dealer relationships and dependable service excellence at every step.' },
];

const stats = [
  { n: '20+', l: 'Years of Experience' },
  { n: `${products.length}+`, l: 'Product Ranges' },
  { n: '1000+', l: 'Happy Dealers' },
  { n: '2 Yrs', l: 'Product Warranty' },
];

const range = [
  'Auto-Cut Voltage Stabilizers',
  'Constant Voltage Transformers',
  'Micro-Controlled Voltage Stabilizers',
  'Automatic Voltage Stabilizers',
  'Automatic Servo Voltage Stabilizers',
  'Power Boards & Water Proof Panels',
];

export default function About() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="hero-bg"><span className="orb orb-1" /><span className="orb orb-2" /><div className="grid-lines" /></div>
        <div className="container">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>About Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Powering India with <span className="text-gradient">Trust</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Creating better product for life.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={products[1].image} alt="COSSICS Servo Stabilizer" className="about-img main" />
            <img src={products[4].image} alt="COSSICS Automatic Stabilizer" className="about-img float" />
            <div className="about-badge"><strong>20+</strong><span>Years</span></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Who We Are</span>
            <h2>Experience, Innovation & <span className="text-gradient">Reliability</span></h2>
            <p className="lead">
              At COSSICS, we combine experience, innovation, and reliability to manufacture electrical products
              that meet modern industry standards. With two decades of market understanding and customer trust,
              our focus remains on delivering quality-driven solutions supported by strong dealer relationships
              and dependable service excellence.
            </p>
            <p>
              Based on Japanese technology, our products are specially designed for DJ / PA, Mainline and
              Gadget use. Every unit is built with heavy duty terminals, a metallic powder coated body and
              advanced IC technology, and comes with low & high cut protection.
            </p>
            <ul className="feature-list two-col">
              {range.map((r) => <li key={r}><FiCheckCircle /> {r}</li>)}
            </ul>
            <Link to="/contact" className="btn btn-primary">Work With Us <FiArrowRight /></Link>
          </motion.div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              className="stat"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
            >
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Drives Us</span>
            <h2>Mission, Vision & <span className="text-gradient">Values</span></h2>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon"><v.icon /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
