import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhoneCall, FiMail, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import PageTransition from '../components/PageTransition.jsx';
import { company } from '../data/company.js';

const empty = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const location = useLocation();
  const product = location.state?.product;
  const [form, setForm] = useState({ ...empty, message: product ? `I am interested in ${product}. Please share price and details.` : '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (form.phone && !/^[0-9+\-\s]{8,15}$/.test(form.phone)) e.phone = 'Please enter a valid phone';
    if (!form.message.trim()) e.message = 'Please write a message';
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New COSSICS enquiry from ${form.name}`,
          from_name: 'COSSICS Website',
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setStatus('sent');
      setForm(empty);
    } catch (error) {
      console.error('Web3Forms submission failed:', error);
      setStatus('error');
    }
  };

  const info = [
    ...company.addresses.map((a) => ({ icon: FiMapPin, title: a.label, lines: a.lines })),
    { icon: FiPhoneCall, title: 'Phone', lines: [company.phone], href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: FiMail, title: 'Email', lines: [company.email], href: `mailto:${company.email}` },
    { icon: FiClock, title: 'Working Hours', lines: [company.hours] },
  ];

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="hero-bg"><span className="orb orb-1" /><span className="orb orb-2" /><div className="grid-lines" /></div>
        <div className="container">
          <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Contact Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Let&apos;s <span className="text-gradient">Talk Power</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Dealer enquiry, bulk order or product advice — we reply fast.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Send us a message</h2>
            <div className="form-row">
              <Field label="Your Name" name="name" value={form.name} onChange={onChange} error={errors.name} />
              <Field label="Phone" name="phone" value={form.phone} onChange={onChange} error={errors.phone} />
            </div>
            <Field label="Email Address" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} />
            <Field label="Message" name="message" textarea value={form.message} onChange={onChange} error={errors.message} />

            <motion.button
              type="submit"
              className="btn btn-primary btn-block"
              whileTap={{ scale: 0.96 }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? <span className="spinner" /> : <><FiSend /> Send Message</>}
            </motion.button>

            <AnimatePresence>
              {status === 'sent' && (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <FiCheckCircle /> Thank you! We will get back to you shortly.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="form-error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <FiAlertCircle /> Message could not be sent. Please try again or contact us directly.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>

          <div className="contact-info">
            {info.map((item, i) => (
              <motion.div
                key={item.title}
                className="info-card"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6 }}
              >
                <div className="info-icon"><item.icon /></div>
                <div>
                  <h4>{item.title}</h4>
                  {item.lines.map((l) =>
                    item.href ? <a key={l} href={item.href}>{l}</a> : <p key={l}>{l}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container">
          <motion.div
            className="map"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              title="COSSICS Location"
              src="https://www.google.com/maps?q=Plot+No-152,+KH-60/13,+Krishan+Vihar,+Near+Shitla+Mata+Mandir,+New+Delhi+110086&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, name, value, onChange, error, type = 'text', textarea }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className={`field ${error ? 'has-error' : ''} ${value ? 'filled' : ''}`}>
      <Tag id={name} name={name} type={textarea ? undefined : type} value={value} onChange={onChange} rows={textarea ? 5 : undefined} placeholder=" " />
      <label htmlFor={name}>{label}</label>
      {error && <small>{error}</small>}
    </div>
  );
}
