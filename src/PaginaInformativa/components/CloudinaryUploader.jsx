import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CloudinaryUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResults, setUploadResults] = useState([]);
  const [error, setError] = useState(null);
  const [publicId, setPublicId] = useState('');
  const [activeTab, setActiveTab] = useState('upload');

  const cloudName = "da84etlav"; // Your Cloudinary cloud name
  const uploadPreset = "ml_default"; // Replace with your actual unsigned upload preset

  // Lista de IDs de imágenes que necesitas subir
  const requiredImages = [
    { id: "ciberseguridad_banner", description: "Banner principal (1600x800)", priority: "Alta" },
    { id: "investigacion_ciberseguridad", description: "Imagen investigación (600x400)", priority: "Alta" },
    { id: "icono-proteccion", description: "Icono protección (80x80)", priority: "Media" },
    { id: "icono-educacion", description: "Icono educación (80x80)", priority: "Media" },
    { id: "icon_conciencia", description: "Icono conciencia (64x64)", priority: "Media" },
    { id: "icon_politicas", description: "Icono políticas (64x64)", priority: "Media" },
    { id: "icon_infraestructura", description: "Icono infraestructura (64x64)", priority: "Media" },
    { id: "icon_educacion", description: "Icono educación alternativo (64x64)", priority: "Media" },
    { id: "img_guia", description: "Imagen guía (400x250)", priority: "Alta" },
    { id: "img_infografia", description: "Imagen infografía (400x250)", priority: "Alta" },
    { id: "img_video", description: "Imagen video (400x250)", priority: "Alta" },
    { id: "img_curso", description: "Imagen curso (400x250)", priority: "Alta" },
  ];

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setIsUploading(true);
    setError(null);
    const results = [];
    
    try {
      // Process each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        
        // If user entered a public ID, use it
        if (publicId && files.length === 1) {
          formData.append('public_id', publicId);
        }
        
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
          method: 'POST',
          body: formData
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Error uploading to Cloudinary');
        }
        
        const data = await response.json();
        results.push({
          original_filename: data.original_filename,
          public_id: data.public_id,
          url: data.secure_url,
          format: data.format,
          resource_type: data.resource_type
        });
      }
      
      setUploadResults(results);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err.message || 'Error uploading files');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Subir recursos a Cloudinary</h2>
      
      {/* Tabs for navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'upload' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('upload')}
        >
          Subir archivos
        </button>
        <button 
          className={`py-2 px-4 font-medium ${activeTab === 'guide' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('guide')}
        >
          Guía de imágenes
        </button>
      </div>
      
      {activeTab === 'guide' ? (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3 text-purple-700">Imágenes requeridas para el sitio web</h3>
          <p className="mb-4">Para que el sitio web funcione correctamente, necesitas subir las siguientes imágenes con estos IDs específicos:</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">ID de imagen</th>
                  <th className="py-2 px-4 border-b text-left">Descripción</th>
                  <th className="py-2 px-4 border-b text-left">Prioridad</th>
                </tr>
              </thead>
              <tbody>
                {requiredImages.map((img, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b font-mono text-sm">{img.id}</td>
                    <td className="py-2 px-4 border-b">{img.description}</td>
                    <td className="py-2 px-4 border-b">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        img.priority === 'Alta' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {img.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Cómo usar esta herramienta:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Use el campo "Public ID" para especificar exactamente el ID que quiere usar para la imagen (use los de la tabla de arriba).</li>
              <li>Seleccione o arrastre el archivo de imagen que desea subir.</li>
              <li>Una vez subido, copie el código generado para usarlo en el componente correspondiente.</li>
              <li>Si está teniendo problemas con las imágenes, visite la <Link to="/image-guide" className="text-blue-500 hover:underline">guía de solución de problemas de imágenes</Link>.</li>
            </ol>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Public ID personalizado (obligatorio para recursos del sitio)
              <input 
                type="text" 
                value={publicId}
                onChange={(e) => setPublicId(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="nombre-personalizado (sin extensión)"
              />
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Para que las imágenes aparezcan en el sitio web, debe usar los IDs específicos listados en la pestaña "Guía de imágenes".
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Haga clic para subir</span> o arrastre y suelte
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF, SVG o MP4 (MAX. 10MB)
                </p>
              </div>
              <input 
                id="dropzone-file" 
                type="file" 
                className="hidden" 
                onChange={handleFileUpload} 
                accept="image/*,video/*"
                multiple
                disabled={isUploading}
              />
            </label>
          </div>
        </>
      )}

      {isUploading && (
        <div className="mt-6 text-center">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
          <p className="mt-3 text-sm text-gray-600">Subiendo archivos...</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}

      {uploadResults.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Resultados de la subida</h3>
          <div className="space-y-4">
            {uploadResults.map((result, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                  <div className="mb-3 md:mb-0 md:w-1/4">
                    {result.resource_type === 'image' ? (
                      <img 
                        src={result.url} 
                        alt={result.original_filename} 
                        className="object-cover rounded-md w-full h-32"
                      />
                    ) : (
                      <video 
                        src={result.url} 
                        controls 
                        className="object-cover rounded-md w-full h-32"
                      >
                        Su navegador no soporta el elemento de video.
                      </video>
                    )}
                  </div>
                  <div className="flex-1">
                    <p><span className="font-semibold">Nombre original:</span> {result.original_filename}</p>
                    <p><span className="font-semibold">Public ID:</span> <span className="text-purple-700">{result.public_id}</span></p>
                    <p><span className="font-semibold">Formato:</span> {result.format}</p>
                    <p className="mt-2">
                      <a 
                        href={result.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-indigo-600 hover:underline"
                      >
                        Ver archivo
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-3 bg-gray-100 p-2 rounded">
                  <p className="text-xs font-mono overflow-auto">
                    <span className="font-semibold">Código para usar en componentes:</span><br />
                    <span className="text-green-700">const {result.public_id.replace(/-/g, "_")} = getCloudinaryUrl("{result.public_id}", "w_400,c_scale,f_auto,q_auto"{result.resource_type !== 'image' ? `, "${result.resource_type}"` : ''});</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudinaryUploader;
