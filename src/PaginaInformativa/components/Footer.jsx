import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gradient-to-b from-gray-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Columna 1: Sobre el proyecto */}
          <div>
            <h3 className="text-xl font-bold mb-5 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-indigo-500">
              Sobre el proyecto
            </h3>
            <p className="text-gray-300">
              Ciudadanos Conscientes en Acción: Estrategias para un Ambiente Digital Seguro y 
              la Educación Cibernética en Santa Cruz de Guanacaste (2000–2024).
            </p>
            <p className="mt-4 text-gray-400 text-sm">
              Este proyecto es parte de una investigación académica enfocada en mejorar la seguridad digital 
              y la educación cibernética en Santa Cruz de Guanacaste.
            </p>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-5 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-emerald-500 after:to-teal-500">
              Enlaces rápidos
            </h3>            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-3 transition-all duration-300"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#sobre-proyecto" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-3 transition-all duration-300"></span>
                  Sobre el proyecto
                </a>
              </li>
              <li>
                <a href="/#estrategias" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-3 transition-all duration-300"></span>
                  Estrategias
                </a>
              </li>
              <li>
                <a href="/#recursos" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-3 transition-all duration-300"></span>
                  Recursos educativos
                </a>
              </li>
              <li>
                <a href="/image-guide" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-3 transition-all duration-300"></span>
                  Guía de imágenes
                </a>
              </li>
              <li>
                <a href="/#footer" className="text-gray-300 hover:text-emerald-400 transition duration-300 flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-3 transition-all duration-300"></span>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
            {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-5 pb-2 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500">
              Contacto
            </h3>
            <p className="text-gray-300 mb-5">
              Para más información sobre este proyecto o para colaborar con nosotros:
            </p>            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a 
                  href="mailto:ciberseguridad.guanacaste@ucr.ac.cr" 
                  className="hover:text-violet-300 transition duration-300"
                >
                  ciberseguridad.guanacaste@ucr.ac.cr
                </a>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <a 
                  href="https://maps.app.goo.gl/ZuzFdAjWGBQaiKZv7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-violet-300 transition duration-300"
                >
                  Universidad de Costa Rica, Sede Guanacaste, Santa Cruz
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div className="mt-16 pt-8 border-t border-gray-800/30 text-center">          <div className="flex justify-center space-x-4 mb-6">
            {/* Facebook - MICITT */}
            <a href="https://www.facebook.com/MICITTCR/" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full hover:shadow-lg hover:shadow-purple-500/20 hover:scale-110 transition-all duration-300"
               aria-label="Facebook MICITT">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            
            {/* Twitter/X - UCR */}
            <a href="https://twitter.com/UCRoficial" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-110 transition-all duration-300"
               aria-label="Twitter UCR">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            
            {/* Instagram - CCSS Seguridad Digital */}
            <a href="https://www.instagram.com/ccssdecostarica/" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full hover:shadow-lg hover:shadow-pink-500/20 hover:scale-110 transition-all duration-300"
               aria-label="Instagram CCSS">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            
            {/* LinkedIn - MICITT */}
            <a href="https://www.linkedin.com/company/micittcr/" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-full hover:shadow-lg hover:shadow-blue-500/20 hover:scale-110 transition-all duration-300"
               aria-label="LinkedIn MICITT">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"></path>
              </svg>
            </a>
            
            {/* YouTube - Centro de Respuesta a Incidentes de Seguridad Informática */}
            <a href="https://www.youtube.com/@CSIRTCR" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-full hover:shadow-lg hover:shadow-red-500/20 hover:scale-110 transition-all duration-300"
               aria-label="YouTube CSIRT">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Proyecto de Ciberseguridad y Educación Digital en Santa Cruz. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};