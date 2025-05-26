import React from 'react';

export const VideoEducativo = () => {
  return (    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white" data-aos="fade-up">      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">Video Educativo</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-500 mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Conozca más sobre la importancia de la seguridad digital y la educación cibernética 
            en nuestro contexto local.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto" data-aos="zoom-in">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-3xl blur-xl"></div>
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-xl">              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                {/* Video educativo sobre ciberseguridad */}                <iframe 
                  className="w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/c7wAz9w4urY" 
                  title="Video educativo sobre ciberseguridad"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-md border border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Recursos audiovisuales sobre ciberseguridad</h3>
                </div>
                <p className="text-gray-700 leading-relaxed ml-12">
                  Los recursos audiovisuales son fundamentales para la educación en ciberseguridad. Documentales como "El dilema de las redes sociales" (Orlowski, 2020) 
                  muestran cómo los algoritmos manipulan el comportamiento del usuario con fines comerciales. En Costa Rica, el programa "En la Mira" (SINART, 2022) 
                  abordó el ciberataque estatal de 2022, explicando sus efectos sobre instituciones como Hacienda y la CCSS.
                </p>                <div className="mt-6 flex justify-end">                  <a 
                    href="https://www.ciberseguridad.micitt.go.cr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg group"
                  >
                    Portal de Ciberseguridad CR
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
