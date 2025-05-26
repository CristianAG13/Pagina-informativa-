import React from 'react';
import getCloudinaryUrl from '../utils/cloudinary';

// Imágenes para las estrategias
const iconConciencia = getCloudinaryUrl("icon_conciencia", "w_64,h_64,c_fill,f_auto,q_auto");
const iconPoliticas = getCloudinaryUrl("icon_politicas", "w_64,h_64,c_fill,f_auto,q_auto");
const iconInfraestructura = getCloudinaryUrl("icon_infraestructura", "w_64,h_64,c_fill,f_auto,q_auto");
const iconEducacion = getCloudinaryUrl("icon_educacion", "w_64,h_64,c_fill,f_auto,q_auto");

export const EstrategiasSeguridad = () => {  
  const estrategias = [
    {
      icon: iconConciencia,
      title: "Conciencia Digital",
      description: "Fomentar una cultura de seguridad digital y comportamiento responsable en línea entre los ciudadanos de Santa Cruz de Guanacaste.",
      color: "from-purple-500 to-indigo-600 border-purple-200",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      icon: iconPoliticas,
      title: "Políticas y Normativas",
      description: "Actualización y aplicación de políticas de seguridad digital adaptadas a las necesidades locales del cantón.",
      color: "from-emerald-500 to-teal-600 border-emerald-200",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      icon: iconInfraestructura,
      title: "Infraestructura Segura",
      description: "Desarrollo y mantenimiento de infraestructuras digitales seguras en instituciones educativas y gubernamentales locales.",
      color: "from-violet-500 to-fuchsia-600 border-violet-200",
      bgColor: "from-violet-50 to-fuchsia-50"
    },
    {
      icon: iconEducacion,
      title: "Formación Ciudadana",
      description: "Programas de capacitación y recursos educativos para desarrollar competencias digitales críticas en la ciudadanía.",
      color: "from-amber-500 to-yellow-600 border-amber-200",
      bgColor: "from-amber-50 to-yellow-50"
    }
  ];

  return (    <section id="estrategias" className="py-16 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">Estrategias para un Ambiente Digital Seguro</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-500 mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            El desarrollo de un entorno digital seguro en Santa Cruz de Guanacaste requiere de estrategias integradas 
            que aborden tanto aspectos técnicos como educativos y culturales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {estrategias.map((estrategia, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${estrategia.bgColor} p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-${estrategia.color.split(' ')[1]}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`bg-gradient-to-r ${estrategia.color} p-4 rounded-xl shadow-lg mb-6 transform -translate-y-12`}>
                  <img 
                    src={estrategia.icon} 
                    alt={`Ícono de ${estrategia.title}`}
                    className="w-12 h-12 text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{estrategia.title}</h3>
                <p className="text-gray-600">{estrategia.description}</p>
              </div>
            </div>
          ))}
        </div>        <div className="mt-24 bg-white backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-gray-100" data-aos="fade-up">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700">Estado Actual en Santa Cruz de Guanacaste</h3>
          </div>
          
          <div className="mb-10 pl-16">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Situación y Desafíos</h4>
            <p className="text-gray-600 mb-4 leading-relaxed">
              El estado del tema en torno a la ciberseguridad y educación cibernética en Santa Cruz de Guanacaste puede considerarse aún limitado. 
              Si bien se han logrado avances normativos, como la Ley N.º 8968 sobre protección de datos personales, y se han publicado estrategias nacionales 
              de ciberseguridad, la literatura evidencia una marcada ausencia de propuestas formativas aplicables a territorios rurales como Santa Cruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-red-700">Problemas Identificados</h4>
              </div>
              <ul className="list-none pl-5 text-gray-600 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span> Actualización normativa insuficiente para el contexto rural</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span> Infraestructura digital limitada en ciertas áreas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span> Escasa formación en competencias digitales críticas</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span> Desarticulación entre políticas nacionales y realidades locales</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-emerald-700">Oportunidades de Mejora</h4>
              </div>
              <ul className="list-none pl-5 text-gray-600 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span> Implementación de programas de alfabetización digital contextualizados</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span> Creación de recursos educativos adaptados a la realidad local</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span> Fortalecimiento de la coordinación interinstitucional</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span> Desarrollo de una cultura de ciberseguridad desde la educación formal</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="max-w-3xl text-center mb-8">
            <p className="text-gray-600 text-lg">
              Estas estrategias forman parte de un enfoque integral para la construcción de un ambiente digital seguro 
              y la formación de una ciudadanía digital crítica y consciente en Santa Cruz de Guanacaste.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.incibe.es/sites/default/files/docs/senior/guia_ciberseguridad_para_todos.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg group"
            >
              Guías de ciberseguridad
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a 
              href="https://www.itu.int/itu-d/sites/cybersecurity/es/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-full hover:from-emerald-600 hover:to-teal-600 transition duration-300 shadow-md hover:shadow-lg group"
            >
              Sector de ciberseguridad UIT
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
