import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020617]">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <EnrollmentForm />
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp Floating Action Button */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
        aria-label="WhatsApp"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png" 
          alt="WhatsApp" 
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <span className="absolute right-full mr-4 bg-[#0f172a] text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Precisa de ajuda?
        </span>
      </a>
    </div>
  );
};

export default App;