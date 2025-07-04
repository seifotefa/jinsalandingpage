import { useState, useEffect } from 'react';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TheChain from './components/TheChain';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

 

  return (
    <>

      {showIntro && <IntroOverlay onFinish={() => setShowIntro(false)} />}

        <Navbar />
        <Hero />
        <About />
        <TheChain />
        <Waitlist/>
        <Footer />
    </>
  );
}

export default App;
