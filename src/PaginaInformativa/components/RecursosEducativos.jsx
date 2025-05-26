import React from 'react';
import { Link } from 'react-router-dom';
import getCloudinaryUrl from '../utils/cloudinary';

// Imágenes para recursos
const imgGuia = getCloudinaryUrl("img_guia", "w_400,h_250,c_fill,f_auto,q_auto");
const imgInfografia = getCloudinaryUrl("img_infografia", "w_400,h_250,c_fill,f_auto,q_auto");
const imgVideo = getCloudinaryUrl("img_video", "w_400,h_250,c_fill,f_auto,q_auto");
const imgCurso = getCloudinaryUrl("img_curso", "w_400,h_250,c_fill,f_auto,q_auto");

export const RecursosEducativos = () => {  const recursos = [    {
      title: "Guía Básica de Ciberseguridad",
      description: "Documento práctico con recomendaciones para mantener la seguridad digital en el hogar y en dispositivos móviles.",
      image: imgGuia,
      link: "https://www.educaopen.com/digital-lab/blog/guias-digitales/introduccion-a-la-ciberseguridadhttps://www.osi.es/es/guias",
      category: "Guía PDF",
      color: "from-purple-500 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },    {
      title: "Infografía: Amenazas Comunes en la Red",
      description: "Material visual que explica los tipos más comunes de amenazas cibernéticas y cómo protegerse contra ellas.",
      image: imgInfografia,
      link: "https://view.genially.com/65022b0bdf39d70010b6ba4c/interactive-content-infografia-de-riesgos-y-amenazas-del-internet",
      category: "Infografía",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200"
    },    {
      title: "Serie de Videos Educativos",
      description: "Colección de videos cortos sobre buenas prácticas de seguridad digital y protección de datos personales.",
      image: imgVideo,
      link: "https://www.youtube.com/@INCIBE/playlists",
      category: "Videos",
      color: "from-violet-500 to-fuchsia-600",
      bgColor: "from-violet-50 to-fuchsia-50",
      borderColor: "border-violet-200"
    },    {
      title: "Curso en Línea: Ciudadanía Digital",
      description: "Capacitación completa sobre competencias digitales críticas y comportamiento responsable en el ciberespacio.",
      image: imgCurso,
      link: "https://mooc.educalab.es/courses/course-v1:MOOC-INTEF+SegInfo+2024_ED1/about",
      category: "Curso Virtual",
      color: "from-amber-500 to-yellow-600",
      bgColor: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-200"
    }
  ];

  return (    <section id="recursos" className="py-24 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">Recursos Educativos</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-500 mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Ponemos a su disposición materiales formativos y recursos para fortalecer sus competencias
            en seguridad digital y promover una ciudadanía crítica y consciente en el entorno digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recursos.map((recurso, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${recurso.bgColor} rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-${recurso.color.split(' ')[1]}/20 transition-all duration-300 transform hover:-translate-y-2 border ${recurso.borderColor}`}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <img 
                  src={recurso.image} 
                  alt={recurso.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600/80 to-indigo-600/80 text-white px-4 py-1 m-2 rounded-full text-sm font-medium">
                  {recurso.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{recurso.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{recurso.description}</p>                <a 
                  href={recurso.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${recurso.color} text-white font-medium rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg group`}
                >
                  Acceder al recurso
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>        <div className="mt-24">
          <div className="bg-gradient-to-br from-indigo-50/70 to-purple-50/70 p-10 rounded-2xl shadow-xl border border-purple-100" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">Referencias Bibliográficas</h3>
            </div>
            <p className="text-gray-600 mb-8 pl-16 text-lg">
              Consulte algunas de las principales referencias utilizadas en nuestra investigación sobre ciberseguridad
              y educación digital en Costa Rica y Santa Cruz de Guanacaste.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Fuentes Destacadas</h4>
              
              <div className="space-y-6 text-gray-600">                <div className="pl-4 border-l-4 border-purple-500 py-1 transition-all duration-300 hover:bg-purple-50 hover:pl-6">
                  <a 
                    href="https://www.micitt.go.cr/sites/default/files/estrategia_nacional_de_ciberseguridad_2023-2027.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:text-purple-600 transition-colors"
                  >
                    <p>
                      <strong className="text-purple-800">Ministerio de Ciencia, Innovación, Tecnología y Telecomunicaciones.</strong> (2023). 
                      Estrategia Nacional de Ciberseguridad Costa Rica 2023–2027.
                    </p>
                  </a>
                </div>
                <div className="pl-4 border-l-4 border-indigo-500 py-1 transition-all duration-300 hover:bg-indigo-50 hover:pl-6">
                  <a 
                    href="https://www.labcibe.una.ac.cr/informes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:text-indigo-600 transition-colors"
                  >
                    <p>
                      <strong className="text-indigo-800">Vega Briceño, E., Lemaitre Picado, R., Villegas Carranza, A., & Solís Cordoncillo, C. M.</strong> (2024). 
                      Estado de la Ciberseguridad en Costa Rica 2023. Laboratorio de Investigación, 
                      Desarrollo e Innovación en Ciberseguridad (LabCIBE). Universidad Nacional Costa Rica.
                    </p>
                  </a>
                </div>
                <div className="pl-4 border-l-4 border-teal-500 py-1 transition-all duration-300 hover:bg-teal-50 hover:pl-6">
                  <a 
                    href="https://dialnet.unirioja.es/servlet/articulo?codigo=5336664" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:text-teal-600 transition-colors"
                  >
                    <p>
                      <strong className="text-teal-800">Area Moreira, M., Borrás Machado, J. F., & San Nicolás Santos, B.</strong> (2015). 
                      Educar a la generación de los millennials como ciudadanos cultos del ciberespacio. 
                      Apuntes para la alfabetización digital. Revista de Estudios de Juventud, 109, 13-32.
                    </p>
                  </a>
                </div>
                <div className="pl-4 border-l-4 border-emerald-500 py-1 transition-all duration-300 hover:bg-emerald-50 hover:pl-6">
                  <a 
                    href="https://www.prosic.ucr.ac.cr/sites/default/files/recursos/informe_2010_cap10.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:text-emerald-600 transition-colors"
                  >
                    <p>
                      <strong className="text-emerald-800">Programa Social de la Sociedad de la Información y el Conocimiento.</strong> (2010). 
                      Ciberseguridad en Costa Rica. Universidad de Costa Rica.
                    </p>
                  </a>
                </div>
              </div>              <div className="mt-8 flex justify-end">
                <Link 
                  to="/bibliografia"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  Ver bibliografía completa
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
