import React from 'react';
import getCloudinaryUrl from '../utils/cloudinary';

const iconProteccion = getCloudinaryUrl("icono-proteccion", "w_80,h_80,c_fill,f_auto,q_auto");
const iconEducacion = getCloudinaryUrl("icono-educacion", "w_80,h_80,c_fill,f_auto,q_auto");

export const InfoCiberseguridad = () => {
  return (    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">Ciberseguridad y Educación Digital</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-500 mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            En las últimas dos décadas, la cibernética y la seguridad digital han adquirido gran relevancia debido a 
            la transformación digital y el avance tecnológico. En Costa Rica, y específicamente en el cantón de Santa Cruz 
            de Guanacaste, el reto y la oportunidad de la digitalización han evidenciado la necesidad de implementar 
            estrategias que integren la protección de la información y el desarrollo de competencias digitales en la ciudadanía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Ciberseguridad */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-300 border border-purple-100" data-aos="fade-right">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <img 
                  src={iconProteccion} 
                  alt="Ícono de protección" 
                  className="w-12 h-12 text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Seguridad Digital</h3>
            </div>
            <p className="text-gray-600 mb-4">
              El conjunto de acciones, políticas y capacidades orientadas a proteger los sistemas, 
              datos y servicios digitales frente a amenazas cibernéticas, con énfasis en entornos 
              locales como Santa Cruz de Guanacaste.
            </p>
            <p className="text-gray-600 mb-4">
              Esta protección no se limita a aspectos técnicos, sino que incluye también el fortalecimiento 
              de una ciudadanía capaz de actuar de forma informada, ética y crítica en el ciberespacio.
            </p>            <div className="mt-6">
              <a 
                href="https://www.micitt.go.cr/sites/default/files/2023-06/Estrategia-Nacional-de-Ciberseguridad-MICITT-2023-2027.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:text-purple-800 transition duration-300 flex items-center group"
              >
                Guías de seguridad digital 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Educación Cibernética */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-teal-200/50 transition-all duration-300 border border-teal-100" data-aos="fade-left">            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl shadow-lg">
                <img 
                  src={iconEducacion} 
                  alt="Ícono de educación" 
                  className="w-12 h-12 text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Educación Cibernética</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Se orienta al desarrollo de competencias digitales y conciencia crítica, 
              necesarias para gestionar de forma segura los entornos digitales.
            </p>
            <p className="text-gray-600 mb-4">
              Este estudio examina cómo la integración de estas dos dimensiones, mediante estrategias 
              educativas y normativas específicas, contribuye a construir un ambiente digital seguro 
              y una ciudadanía digital consciente en Santa Cruz de Guanacaste durante el periodo 2000–2024.
            </p>            <div className="mt-6">
              <a 
                href="https://www.mep.go.cr/tecnologias-digitales-educacion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 font-semibold hover:text-teal-800 transition duration-300 flex items-center group"
              >
                Educación digital en Costa Rica 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-lg border border-amber-200" data-aos="fade-up">          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800">Importancia del estudio</h4>
          </div>
          <p className="text-gray-600 pl-11">
            Este proyecto propone ir más allá de los estudios existentes al focalizar su análisis en la intersección entre 
            educación cívica en competencias digitales, políticas institucionales y cultura digital segura dentro del contexto 
            específico de Santa Cruz de Guanacaste. A diferencia de investigaciones previas, esta propuesta contempla una 
            perspectiva territorializada y situada, que reconoce las particularidades del entorno rural y sus limitaciones estructurales.
          </p>
        </div>
      </div>
    </section>
  );
};
