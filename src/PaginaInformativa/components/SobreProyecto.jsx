import React from 'react';
import getCloudinaryUrl from '../utils/cloudinary';

// Importar imágenes
const imagenInvestigacion = getCloudinaryUrl("investigacion_ciberseguridad", "w_600,h_400,c_fill,f_auto,q_auto");

export const SobreProyecto = () => {
  return (    <section id="sobre-proyecto" className="py-24 bg-gradient-to-b from-white to-indigo-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">Sobre el Proyecto</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-500 mb-6"></div>
        </div>
      
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl blur-lg"></div>
              <img 
                src={imagenInvestigacion} 
                alt="Investigación de ciberseguridad en Santa Cruz" 
                className="relative rounded-xl shadow-xl w-full h-auto transform hover:scale-102 transition-transform duration-500 z-10"
              />
            </div>
          </div>
          
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Esta investigación se fundamenta tanto en perspectivas internacionales como nacionales, 
                al analizar cómo las prácticas en ciberseguridad y los procesos educativos se han transformado 
                frente a la creciente sofisticación de las amenazas digitales y el cambio en la cultura de la información.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Al revisar el cuerpo de literatura disponible, se evidencia una carencia significativa de estudios 
                aplicados específicamente a cantones rurales como Santa Cruz, donde las condiciones socioeconómicas, 
                culturales y de infraestructura tecnológica plantean desafíos particulares.
              </p>
                <div className="flex items-center mt-10 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-700">Objetivos del proyecto</h3>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-purple-100 mb-6 hover:shadow-xl transition-all duration-300">
                <p className="font-semibold text-purple-700 text-lg mb-2">Objetivo general:</p>
                <p className="text-gray-700 leading-relaxed">
                  Analizar la relación entre la seguridad digital y la educación cibernética en Santa Cruz de Guanacaste 
                  durante el periodo 2000–2024, a fin de que una página web informativa fortalezca un ambiente digital 
                  seguro y promueva la formación de ciudadanos conscientes en la región.
                </p>
              </div>
              
              <p className="font-semibold text-teal-700 text-lg mb-4">Objetivos específicos:</p>
              <ul className="space-y-4 text-gray-700">
                <li className="bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm transform hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <span className="block font-medium mb-1">Evolución de medidas y políticas</span>
                  Examinar la evolución de las medidas y políticas de seguridad digital en el cantón de Santa Cruz de Guanacaste 
                  durante el periodo 2000–2024.
                </li>
                <li className="bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm transform hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <span className="block font-medium mb-1">Análisis de vulnerabilidades</span>
                  Analizar cómo las deficiencias en la actualización de normativas y protocolos de seguridad digital 
                  han contribuido a la vulnerabilidad de los sistemas informáticos.
                </li>
                <li className="bg-gradient-to-r from-teal-50 to-emerald-50 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm transform hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <span className="block font-medium mb-1">Desarrollo de plataforma educativa</span>
                  Desarrollar una página web informativa como estrategia tecnológica que facilite el acceso a contenidos 
                  sobre educación cibernética.
                </li>
              </ul>

              {/* Botón para más información */}
              <div className="mt-8">
                <a 
                  href="https://www.elpais.cr/2023/11/13/gobierno-de-costa-rica-presenta-estrategia-de-ciberseguridad-2023-2027/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg group"
                >
                  Estrategia Nacional de Ciberseguridad
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
