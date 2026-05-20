import { useState } from 'react';
import './PageStyles.css';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page inner-page">
      <div className="inner-hero inner-hero--short">
        <div className="inner-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/1725566392796-38I40RYLNVW9DK5LUDXC/unsplash-image-LiY9rVmDGX4.jpg"
            alt="Contact"
          />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Let's Talk</p>
          <h1 className="display">Inquire</h1>
        </div>
      </div>

      <div className="section container">
        <div className="contact-layout">
          <div className="contact-info">
            <p className="overline">The Process</p>
            <h2 className="headline">Simple. Personal.<br />No surprises.</h2>
            <div className="divider" />
            <div className="contact-steps">
              <div className="contact-step">
                <span className="contact-step__num">01</span>
                <div>
                  <h4>You reach out</h4>
                  <p className="body-text">Tell us what you're thinking — buckle, belt, or both. Any occasion or deadline in mind.</p>
                </div>
              </div>
              <div className="contact-step">
                <span className="contact-step__num">02</span>
                <div>
                  <h4>We talk</h4>
                  <p className="body-text">We'll discuss your initials, leather preferences, and answer every question you have.</p>
                </div>
              </div>
              <div className="contact-step">
                <span className="contact-step__num">03</span>
                <div>
                  <h4>Crafting begins</h4>
                  <p className="body-text">Your piece goes into production. Buckles typically take 4–6 weeks from start to finish.</p>
                </div>
              </div>
              <div className="contact-step">
                <span className="contact-step__num">04</span>
                <div>
                  <h4>It arrives</h4>
                  <p className="body-text">Your Bronco Buckles buckle — made for you, stamped with your initials, and ready to wear.</p>
                </div>
              </div>
            </div>
            <div className="contact-direct" style={{ marginTop: '3rem' }}>
              <p className="overline">Or reach us directly</p>
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <a href="tel:2142065060" className="contact-link">(214) 206-5060</a>
                <a href="mailto:Stocker@BroncoBuckleCompany.com" className="contact-link">Stocker@BroncoBuckleCompany.com</a>
                <p className="body-text" style={{ marginTop: '0.5rem' }}>1901 N. Akard Street · Dallas, Texas 75201</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-success">
                <p className="overline">Message Received</p>
                <h3 className="headline">We'll be in touch.</h3>
                <div className="divider" />
                <p className="body-text">
                  Thank you for reaching out. We typically respond within one business day.
                  We look forward to building something great with you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="First and last name"
                  />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(000) 000-0000"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="interest">I'm interested in</label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Buckle only">Buckle only</option>
                    <option value="Belt only">Belt only</option>
                    <option value="Buckle and Belt">Buckle and Belt</option>
                    <option value="Gift / Special Occasion">Gift / Special Occasion</option>
                    <option value="Corporate / Custom Logo">Corporate / Custom Logo</option>
                    <option value="Just have questions">Just have questions</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Tell us more</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any occasion, timeline, or details you'd like to share…"
                  />
                </div>
                <button type="submit" className="btn" disabled={status === 'sending'}>
                  <span>{status === 'sending' ? 'Sending…' : 'Send Inquiry'}</span>
                </button>
                {status === 'error' && (
                  <p className="form-error">Something went wrong. Please email us directly.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
