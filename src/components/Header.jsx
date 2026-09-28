import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { company } from '../data/company.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><FiMail /> {company.email}</span>
          <span className="topbar-tag">Based on Japanese Technology • 2 Years Warranty</span>
          <span><FiPhoneCall /> {company.phone}</span>
        </div>
      </div>
      <div className="navbar">
      <div className="container nav">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="COSSICS" />
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end className="nav-link">
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <motion.span layoutId="nav-underline" className="nav-underline" />}
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary btn-sm">Get a Quote</Link>
        </nav>

        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className="mobile-link">
                {l.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
