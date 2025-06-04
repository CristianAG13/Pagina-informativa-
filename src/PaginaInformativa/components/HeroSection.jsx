import getCloudinaryUrl from '../utils/cloudinary';

// Versión para móviles (600px de ancho)
const heroBg_mobile = getCloudinaryUrl("ciberseguridad_banner", "w_600,q_auto,f_auto");
// Versión para pantallas pequeñas (768px)
const heroBg_768 = getCloudinaryUrl("ciberseguridad_banner", "w_768,q_auto,f_auto");
// Versión para pantallas medianas (1024px)
const heroBg_1024 = getCloudinaryUrl("ciberseguridad_banner", "w_1024,q_auto,f_auto");
// Versión para pantallas grandes (1600px)
const heroBg_1600 = getCloudinaryUrl("ciberseguridad_banner", "w_1600,q_auto,f_auto");

export const HeroSection = () => {
  return (
    <>
      <div className="relative h-[80vh]">
        {/* Imagen de fondo responsiva con srcSet y sizes */}
        <img
          src={heroBg_1024}
          srcSet={`
            ${heroBg_mobile} 600w,
            ${heroBg_768} 768w,
            ${heroBg_1024} 1024w,
            ${heroBg_1600} 1600w
          `}
          sizes="(max-width: 768px) 600px,
                 (max-width: 1280px) 1024px,
                 1600px"
          alt="Fondo de ciberseguridad"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />        {/* Overlay para suavizar el fondo */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70"></div>

        {/* Card semi-transparente */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-5xl w-full mx-auto p-8 bg-black bg-opacity-40 backdrop-blur-sm rounded-xl shadow-2xl text-center border border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Ciudadanos Conscientes en Acción
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-semibold text-emerald-300">
              Estrategias para un Ambiente Digital Seguro y la Educación Cibernética en Santa Cruz de Guanacaste
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white">
              2000 - 2024
            </p>
            <div className="mt-8">
            </div>
            <a
              href="https://forms.gle/8b7d1c4f3e2f5b6a9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors duration-300"
            >
              Participa en nuestra encuesta
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
