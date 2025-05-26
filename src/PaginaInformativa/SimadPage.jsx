import React, { useState } from 'react';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import '../app.css';
import { HeroSection } from './components/HeroSection';
import { InfoCiberseguridad } from './components/InfoCiberseguridad';
import { SobreProyecto } from './components/SobreProyecto';
import { EstrategiasSeguridad } from './components/EstrategiasSeguridad';
import { VideoEducativo } from './components/VideoEducativo';
import { RecursosEducativos } from './components/RecursosEducativos';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import CloudinaryDebugger from './components/CloudinaryDebugger';

const SimadPage = () => {
  const [showDebugger, setShowDebugger] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  // Function to toggle the debugger visibility
  const toggleDebugger = () => {
    setShowDebugger(prev => !prev);
  };
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-roboto"> 
      {/* Componente para scroll hacia arriba */}
      <ScrollToTop />
      
      {/* Botón de ayuda con imágenes */}
      <a
        href="/guia-imagenes"
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full p-3 shadow-lg"
        title="¿Problemas con las imágenes?"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
      
      {/* Debug Tool Button */}
      <button
        onClick={toggleDebugger}
        className="fixed bottom-24 right-4 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full p-3 shadow-lg"
        title="Depurador de Multimedia"
      >
        {showDebugger ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        )}
      </button>

      {/* Debug Tool Panel */}
      {showDebugger && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 overflow-auto">
          <div className="min-h-screen py-8">
            <button 
              onClick={toggleDebugger}
              className="fixed top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <CloudinaryDebugger />
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <HeroSection/>

      {/* Información sobre Ciberseguridad */}
      <InfoCiberseguridad/>

      {/* Sobre el Proyecto */}
      <SobreProyecto/>

      {/* Video Educativo */}
      <VideoEducativo/>

      {/* Estrategias de Seguridad */}
      <EstrategiasSeguridad/>
      
      {/* Recursos Educativos */}
      <RecursosEducativos/>
      
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default SimadPage;
