import { useState } from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';
import SEO from '../components/SEO';
import './FAQ.css';

const faqs = [
  { q: "How do I order a buckle?", a: "Simply reach out to us via our inquiry form or give us a call. We'll walk you through the process — initials, style preferences, and belt options — and get your order started from there. No complicated forms or online checkout. Just a conversation." },
  { q: "How long does it take to receive my buckle and belt?", a: "The custom buckle and belt typically take approximately four to six weeks from start to finish. If you have a specific occasion or deadline in mind, let us know when you reach out and we'll do our best to plan accordingly." },
  { q: "What does the buckle cost?", a: "Standard buckles with block initials are $1,275. Special orders — logos, brands, custom designs — are $1,425. Custom engraving on the back is an additional $50. All prices are plus applicable sales tax." },
  { q: "What belt options are available?", a: "We offer American Alligator ($525–$675), Cowhide ($150–$350 depending on style), and Condensed Bull Hide ($475). Each is made to pair with your Bronco Buckles buckle and sized to your specifications." },
  { q: "Can I order a buckle with a logo or brand instead of initials?", a: "Absolutely. Custom logos, ranch brands, and special designs are available at the special order price of $1,425. Reach out and we'll discuss what you have in mind." },
  { q: "What is 'Run2theRoar' and why is it on the buckle?", a: "Run2theRoar is our motto — stamped on the back of every buckle. It's a reminder to face the day with fearlessness and intention, to run toward challenges rather than away from them. You can read the full story on our Run2theRoar page." },
  { q: "Is the buckle sterling silver?", a: "Yes. Every Bronco Buckles buckle is hand-crafted in .925 sterling silver. It's stamped 'Sterling' on the side — you can see it on every piece we make." },
  { q: "Can I order as a gift?", a: "Many of our orders are gifts. A Bronco Buckles buckle makes a distinctive, lasting gift for fathers, sons, groomsmen, or any man who carries himself with intention. We can help you plan around a delivery date." },
  { q: "Do you ship?", a: "Yes. Reach out when you inquire and we'll discuss shipping options and any applicable costs based on your location." },
  { q: "What is your guarantee?", a: "We guarantee our buckles and belts will keep your pants on — 100%. Beyond that, we stand behind the craftsmanship and materials. If something isn't right, call us. We'll make it right." },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(!open)}>
        <span className="faq-item__num">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq-item__text">{q}</span>
        <span className="faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-item__a">
        <p className="body-text">{a}</p>
      </div>
    </div>
  );
}


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

export default function FAQ() {
  return (
    <div className="page inner-page">
      <SEO
        title="FAQ — Sterling Silver Belt Buckle Questions Answered"
        description="How to order a Bronco Buckles sterling silver belt buckle. Pricing from $1,275, 4-6 week lead times, belt options, custom monograms, engraving, and shipping. Everything you need to know."
        path="/faq"
        schema={faqSchema}
        keywords="custom belt buckle FAQ, how to order silver buckle, sterling silver buckle price, belt buckle lead time, custom monogram buckle questions, Bronco Buckles FAQ"
      />
      <div className="inner-hero inner-hero--short">
        <div className="inner-hero__bg">
          <img src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/1725566392796-38I40RYLNVW9DK5LUDXC/unsplash-image-LiY9rVmDGX4.jpg" alt="FAQ" />
          <div className="inner-hero__overlay" />
        </div>
        <div className="inner-hero__content container">
          <p className="overline">Got Questions</p>
          <h1 className="display">FAQ</h1>
        </div>
      </div>

      <div className="section container">
        <div className="section--steel-light" style={{ margin: '0 -2rem', padding: '5rem 2rem' }}>
          <div className="faq-layout">
            <div className="faq-intro">
              <p className="overline">Everything You Need to Know</p>
              <h2 className="headline">We have an endless supply of answers.</h2>
              <div className="divider" />
              <p className="body-text">Can't find what you're looking for? We also have an endless supply of unsolicited advice on most any question. Give it a try.</p>
              <Link to="/contact" className="btn" style={{ marginTop: '2rem' }}><span>Ask Us Directly</span></Link>
            </div>
            <div className="faq-list">
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
