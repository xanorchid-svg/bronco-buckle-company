import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import TheBuckle from './pages/TheBuckle';
import TheBelt from './pages/TheBelt';
import Run2theRoar from './pages/Run2theRoar';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './index.css';

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-buckle" element={<TheBuckle />} />
            <Route path="/the-belt" element={<TheBelt />} />
            <Route path="/run2theroar" element={<Run2theRoar />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
