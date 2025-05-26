import React from 'react';
import { Link } from 'react-router-dom';

const Bibliografia = () => {
  const referencias = [
    {
      id: 1,
      autor: "Ministerio de Ciencia, Innovación, Tecnología y Telecomunicaciones",
      año: "2023",
      titulo: "Estrategia Nacional de Ciberseguridad Costa Rica 2023–2027",
      url: "https://www.micitt.go.cr/sites/default/files/estrategia_nacional_de_ciberseguridad_2023-2027.pdf",
      color: "purple"
    },
    {
      id: 2,
      autor: "Vega Briceño, E., Lemaitre Picado, R., Villegas Carranza, A., & Solís Cordoncillo, C. M.",
      año: "2024",
      titulo: "Estado de la Ciberseguridad en Costa Rica 2023",
      editorial: "Laboratorio de Investigación, Desarrollo e Innovación en Ciberseguridad (LabCIBE). Universidad Nacional Costa Rica",
      url: "https://www.labcibe.una.ac.cr/informes",
      color: "indigo"
    },
    {
      id: 3,
      autor: "Area Moreira, M., Borrás Machado, J. F., & San Nicolás Santos, B.",
      año: "2015",
      titulo: "Educar a la generación de los millennials como ciudadanos cultos del ciberespacio. Apuntes para la alfabetización digital",
      revista: "Revista de Estudios de Juventud",
      volumen: "109",
      paginas: "13-32",
      url: "https://dialnet.unirioja.es/servlet/articulo?codigo=5336664",
      color: "teal"
    },
    {
      id: 4,
      autor: "Programa Social de la Sociedad de la Información y el Conocimiento",
      año: "2010",
      titulo: "Ciberseguridad en Costa Rica",
      editorial: "Universidad de Costa Rica",
      url: "https://www.prosic.ucr.ac.cr/sites/default/files/recursos/informe_2010_cap10.pdf",
      color: "emerald"
    },
    {
      id: 5,
      autor: "García Hernández, C., & Valdovinos Chávez, R. M.",
      año: "2020",
      titulo: "El rol de la educación en la formación de una cultura digital para prevenir riesgos cibernéticos",
      revista: "Revista Digital Universitaria",
      volumen: "21(3)",
      url: "https://www.revista.unam.mx/2020v21n3/el-rol-de-la-educacion-en-la-formacion-de-una-cultura-digital/",
      color: "blue"
    },
    {
      id: 6,
      autor: "Organización de los Estados Americanos & Banco Interamericano de Desarrollo",
      año: "2020",
      titulo: "Ciberseguridad: Riesgos, Avances y el Camino a Seguir en América Latina y el Caribe",
      url: "https://publications.iadb.org/publications/spanish/document/Reporte-Ciberseguridad-2020-riesgos-avances-y-el-camino-a-seguir-en-America-Latina-y-el-Caribe.pdf",
      color: "sky"
    },
    {
      id: 7,
      autor: "Internet Society",
      año: "2022",
      titulo: "Informe Global de Internet 2022",
      url: "https://www.internetsociety.org/issues/",
      color: "cyan"
    },
    {
      id: 8,
      autor: "INCIBE - Instituto Nacional de Ciberseguridad",
      año: "2023",
      titulo: "Guías de Ciberseguridad para Ciudadanos",
      url: "https://www.incibe.es/ciudadania/guias",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
            Bibliografía Completa
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-emerald-400 to-teal-500 mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Fuentes y referencias bibliográficas utilizadas en nuestra investigación sobre ciberseguridad
            y educación digital en Costa Rica y Santa Cruz de Guanacaste.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="space-y-8">
            {referencias.map((ref) => (
              <a
                key={ref.id}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block pl-6 border-l-4 border-${ref.color}-500 py-4 px-6 rounded-lg transition-all duration-300 hover:bg-${ref.color}-50 hover:shadow-md hover:pl-8`}
              >
                <div className="flex items-start">
                  <div className="flex-grow">
                    <p className="mb-2">
                      <strong className={`text-${ref.color}-800 text-lg font-semibold`}>
                        {ref.autor}
                      </strong> 
                      <span className="text-gray-700"> ({ref.año}). </span>
                    </p>
                    <p className="text-gray-800 font-medium mb-1">
                      {ref.titulo}.
                    </p>
                    {ref.revista && (
                      <p className="text-gray-600 italic">
                        {ref.revista}, {ref.volumen}
                        {ref.paginas && <span>, pp. {ref.paginas}</span>}
                      </p>
                    )}
                    {ref.editorial && (
                      <p className="text-gray-600">
                        {ref.editorial}.
                      </p>
                    )}
                  </div>
                  <div className={`ml-4 text-${ref.color}-600`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>          <div className="mt-12 flex justify-end">
            <Link
              to="/#recursos"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Volver a Recursos Educativos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bibliografia;
