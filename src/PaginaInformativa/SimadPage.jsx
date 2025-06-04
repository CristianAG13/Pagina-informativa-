import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import '../App.css';
import { HeroSection } from './components/HeroSection';
import { InfoCiberseguridad } from './components/InfoCiberseguridad';
import { SobreProyecto } from './components/SobreProyecto';
import { EstrategiasSeguridad } from './components/EstrategiasSeguridad';
import { VideoEducativo } from './components/VideoEducativo';
import { RecursosEducativos } from './components/RecursosEducativos';
import { Footer } from './components/Footer';

const SimadPage = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-roboto"> 
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
