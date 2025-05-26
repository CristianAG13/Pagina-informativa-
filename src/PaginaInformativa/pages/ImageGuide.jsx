import React from 'react';
import { Link } from 'react-router-dom';

export const ImageGuide = () => {
  // Lista de IDs de imágenes que necesita el sitio
  const requiredImages = [
    { id: "ciberseguridad_banner", description: "Banner principal", size: "1600x800px" },
    { id: "investigacion_ciberseguridad", description: "Imagen investigación", size: "600x400px" },
    { id: "icono-proteccion", description: "Icono protección", size: "80x80px" },
    { id: "icono-educacion", description: "Icono educación", size: "80x80px" },
    { id: "icon_conciencia", description: "Icono conciencia", size: "64x64px" },
    { id: "icon_politicas", description: "Icono políticas", size: "64x64px" },
    { id: "icon_infraestructura", description: "Icono infraestructura", size: "64x64px" },
    { id: "icon_educacion", description: "Icono educación alternativo", size: "64x64px" },
    { id: "img_guia", description: "Imagen guía", size: "400x250px" },
    { id: "img_infografia", description: "Imagen infografía", size: "400x250px" },
    { id: "img_video", description: "Imagen video", size: "400x250px" },
    { id: "img_curso", description: "Imagen curso", size: "400x250px" }
  ];

  // Ejemplos de imágenes que se podrían usar
  const exampleImages = [
    {
      category: "Fondos y banners",
      images: [
        { url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=400&auto=format&fit=crop", description: "Fondo ciberseguridad" },
        { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=400&auto=format&fit=crop", description: "Investigación seguridad" }
      ]
    },
    {
      category: "Recursos educativos",
      images: [
        { url: "https://images.unsplash.com/photo-1554224155-8d04cb21ed1c?q=80&w=400&auto=format&fit=crop", description: "Guía" },
        { url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=400&auto=format&fit=crop", description: "Infografía" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-600 py-6 px-8">
          <h1 className="text-3xl font-bold text-white">Guía para resolver problemas de imágenes</h1>
          <p className="text-purple-100 mt-2">
            Solución para los recursos multimedia que no aparecen en tu sitio web
          </p>
        </div>

        <div className="p-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué está pasando?</h2>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-gray-700">
                Tu sitio web está intentando cargar imágenes y videos desde <strong>Cloudinary</strong>, pero no tienes 
                una cuenta configurada o los archivos no están subidos con los nombres correctos.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">Hay dos formas de resolver esto:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Opción 1 */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-100 shadow-sm">
                <h4 className="font-bold text-lg text-purple-800 mb-3">
                  Opción 1: Usar imágenes de stock (Solución rápida)
                </h4>
                <p className="mb-4 text-gray-700">
                  Ya hemos actualizado tu código para usar imágenes de stock temporales. Refresca la página principal para ver los cambios.
                </p>
                <div className="bg-white p-3 rounded border border-purple-100 text-sm">
                  <p className="font-semibold mb-1">¿Cómo funciona?</p>
                  <p>Modificamos el archivo <code className="bg-gray-100 px-1 py-0.5 rounded">cloudinary.js</code> para que use imágenes alternativas de Unsplash y placeholder.</p>
                </div>
              </div>
              
              {/* Opción 2 */}
              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 p-6 rounded-lg border border-indigo-100 shadow-sm">
                <h4 className="font-bold text-lg text-indigo-800 mb-3">
                  Opción 2: Usar Cloudinary (Solución permanente)
                </h4>
                <p className="mb-4 text-gray-700">
                  Configura una cuenta gratuita en Cloudinary y sube tus propias imágenes con los nombres específicos.
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4 text-gray-700">
                  <li>Registrarse en <a href="https://cloudinary.com/users/register/free" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cloudinary</a></li>
                  <li>Sube tus imágenes usando los nombres específicos (ver abajo)</li>
                  <li>Actualiza el <code className="bg-gray-100 px-1 py-0.5 rounded">cloudName</code> en el archivo <code className="bg-gray-100 px-1 py-0.5 rounded">cloudinary.js</code></li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Lista de imágenes necesarias */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Imágenes necesarias</h2>
            <p className="mb-4 text-gray-700">
              Es importante usar exactamente estos nombres para las imágenes que subas a Cloudinary:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID en Cloudinary</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamaño Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {requiredImages.map((img, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-4 text-sm font-mono text-indigo-700">{img.id}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{img.description}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{img.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Ejemplos de imágenes */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ejemplos de imágenes</h2>
            <p className="mb-4 text-gray-700">
              Estas son algunas imágenes de stock que puedes utilizar como referencia o descargar para tu sitio:
            </p>
            
            {exampleImages.map((category, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{category.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {category.images.map((image, imageIdx) => (
                    <div key={imageIdx} className="border rounded-lg overflow-hidden bg-gray-50">
                      <img src={image.url} alt={image.description} className="w-full h-40 object-cover" />
                      <div className="p-3">
                        <p className="text-sm font-medium">{image.description}</p>
                        <a 
                          href={image.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-indigo-600 hover:underline"
                        >
                          Ver imagen completa
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-between items-center">
            <Link 
              to="/"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-sm"
            >
              Volver al sitio principal
            </Link>
            
            <a 
              href="https://cloudinary.com/documentation/image_upload_api_reference" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Documentación de Cloudinary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGuide;
