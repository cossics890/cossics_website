import { Link } from 'react-router-dom';
import { FiMail, FiPhoneCall, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { company } from '../data/company.js';
import { categories } from '../data/products.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" />
      <div className="container footer-grid">
        <div>
          <div className="footer-logo"><img src={logo} alt="COSSICS" /></div>
          <p className="footer-about">
            Two decades of experience, innovation and reliability in manufacturing voltage stabilizers,
            transformers and power solutions for modern India.
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4>Products</h4>
          <ul>
            {categories.slice(1).map((c) => (
              <li key={c}><Link to={`/?category=${encodeURIComponent(c)}#products`}>{c}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <ul className="footer-contact">
            <li><FiMapPin /> <span>{company.addresses[0].lines.join(', ')}</span></li>
            <li><FiPhoneCall /> <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></li>
            <li><FiMail /> <a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} COSSICS. All rights reserved.</span>
          <span className="footer-tagline">{company.tagline}</span>
          <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
