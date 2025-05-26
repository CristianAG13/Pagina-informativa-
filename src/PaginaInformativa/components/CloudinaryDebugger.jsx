import React, { useEffect, useState } from 'react';
import getCloudinaryUrl from '../utils/cloudinary';

export const CloudinaryDebugger = () => {
  const [debugResults, setDebugResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const testResources = [
    { name: "ciberseguridad_banner", id: "banner", transformation: "w_300,q_auto,f_auto" },
    { name: "investigacion_ciberseguridad", id: "investigacion", transformation: "w_300,h_200,c_fill,f_auto,q_auto" },
    { name: "icono-proteccion", id: "proteccion", transformation: "w_80,h_80,c_fill,f_auto,q_auto" },
    { name: "icono-educacion", id: "educacion", transformation: "w_80,h_80,c_fill,f_auto,q_auto" },
    { name: "icon_conciencia", id: "conciencia", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "icon_politicas", id: "politicas", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "icon_infraestructura", id: "infraestructura", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "icon_educacion", id: "educacion2", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "img_guia", id: "guia", transformation: "w_300,h_180,c_fill,f_auto,q_auto" },
    { name: "img_infografia", id: "infografia", transformation: "w_300,h_180,c_fill,f_auto,q_auto" },
    { name: "img_video", id: "video", transformation: "w_300,h_180,c_fill,f_auto,q_auto" },
    { name: "img_curso", id: "curso", transformation: "w_300,h_180,c_fill,f_auto,q_auto" }
  ];

  const videoResources = [
    { name: "Liceo_Santa_Cruz_bxs0ix.mp4", id: "video1", transformation: "w_640,q_auto,f_auto", type: "video" }
  ];

  useEffect(() => {

    const results = {};
    
  
    testResources.forEach(resource => {
      const url = getCloudinaryUrl(resource.name, resource.transformation);
      results[resource.id] = { 
        name: resource.name, 
        url, 
        status: 'pending',
        type: 'image'
      };
    });
    
    
    setDebugResults(results);
    setIsLoading(false);
  }, []);

  const handleImageLoad = (id) => {
    setDebugResults(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        status: 'success'
      }
    }));
  };

  const handleImageError = (id) => {
    setDebugResults(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        status: 'error'
      }
    }));
  };

  const renderResourceTest = (resourceData, id) => {
    if (resourceData.type === 'image') {
      return (
        <div key={id} className="resource-test">
          <p className="font-semibold mb-1">{resourceData.name}</p>
          <div 
            className={`resource-container p-2 rounded-md ${
              resourceData.status === 'success' ? 'bg-green-100 border border-green-300' : 
              resourceData.status === 'error' ? 'bg-red-100 border border-red-300' : 
              'bg-gray-100 border border-gray-300'
            }`}
          >
            <img 
              src={resourceData.url} 
              onLoad={() => handleImageLoad(id)} 
              onError={() => handleImageError(id)} 
              alt={resourceData.name}
              className="resource-image w-full h-auto rounded-md" 
              style={{ maxWidth: '300px', maxHeight: '200px', display: resourceData.status === 'error' ? 'none' : 'block' }}
            />
            <div className="status mt-2 font-bold text-center">
              {resourceData.status === 'pending' && '⏳ Cargando...'}
              {resourceData.status === 'success' && '✅ Cargado correctamente'}
              {resourceData.status === 'error' && '❌ Error al cargar'}
            </div>
            <div className="text-xs overflow-hidden text-ellipsis mt-1 text-gray-600">
              {resourceData.url}
            </div>
          </div>
        </div>
      );
    } else if (resourceData.type === 'video') {
      return (
        <div key={id} className="resource-test">
          <p className="font-semibold mb-1">{resourceData.name}</p>
          <div className="resource-container p-2 rounded-md bg-gray-100 border border-gray-300">
            <video 
              controls 
              width="300" 
              src={resourceData.url} 
              onLoadedData={() => handleImageLoad(id)} 
              onError={() => handleImageError(id)} 
              className="resource-video w-full h-auto rounded-md"
            >
              Su navegador no soporta el elemento de video.
            </video>
            <div className="status mt-2 font-bold text-center">
              {resourceData.status === 'pending' && '⏳ Cargando...'}
              {resourceData.status === 'success' && '✅ Cargado correctamente'}
              {resourceData.status === 'error' && '❌ Error al cargar'}
            </div>
            <div className="text-xs overflow-hidden text-ellipsis mt-1 text-gray-600">
              {resourceData.url}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  if (isLoading) {
    return <div>Cargando herramienta de diagnóstico...</div>;
  }


  const totalResources = Object.keys(debugResults).length;
  const successfulResources = Object.values(debugResults).filter(r => r.status === 'success').length;
  const failedResources = Object.values(debugResults).filter(r => r.status === 'error').length;
  const pendingResources = Object.values(debugResults).filter(r => r.status === 'pending').length;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Diagnóstico de recursos multimedia</h2>
        
        <div className="stats mb-6 grid grid-cols-4 gap-4">
          <div className="stat p-4 bg-blue-100 rounded-lg">
            <div className="text-xl font-bold">{totalResources}</div>
            <div>Total</div>
          </div>
          <div className="stat p-4 bg-green-100 rounded-lg">
            <div className="text-xl font-bold">{successfulResources}</div>
            <div>Exitosos</div>
          </div>
          <div className="stat p-4 bg-red-100 rounded-lg">
            <div className="text-xl font-bold">{failedResources}</div>
            <div>Fallidos</div>
          </div>
          <div className="stat p-4 bg-yellow-100 rounded-lg">
            <div className="text-xl font-bold">{pendingResources}</div>
            <div>Pendientes</div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Información de Cloudinary</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <p><strong>Cloud Name:</strong> da84etlav</p>
            <p><strong>Base URL:</strong> https://res.cloudinary.com/da84etlav</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.keys(debugResults).map(id => renderResourceTest(debugResults[id], id))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 rounded-md border border-yellow-200">
          <h3 className="font-bold text-lg mb-2">Solución de problemas:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Asegúrese de que todos los recursos estén subidos a su cuenta de Cloudinary</li>
            <li>Verifique que los nombres de los recursos (public IDs) sean correctos</li>
            <li>Si un recurso no carga, intente acceder directamente a su URL para ver el error específico</li>
            <li>Para imágenes que fallan, suba de nuevo los recursos a Cloudinary usando los nombres exactos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CloudinaryDebugger;
