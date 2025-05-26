import React, { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Controla la visibilidad del botón de volver arriba
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para volver arriba al hacer clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Agregar evento de scroll y limpieza
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-purple-400/50 focus:outline-none"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};