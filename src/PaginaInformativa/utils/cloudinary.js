
/**
 * Get an image URL based on resource name
 * @param {string} publicId - The name of the resource
 * @param {string} transformation - The transformation parameters (ignored in this version)
 * @param {string} resourceType - The type of resource (image, video, etc.)
 * @returns {string} The URL to a relevant image
 */
export const getCloudinaryUrl = (
  publicId,
  transformation = "w_800,c_scale,f_auto,q_auto", // eslint-disable-line no-unused-vars
  resourceType = "image",
) => {
  // Mapping de ID a URLs de imágenes relevantes para ciberseguridad y educación digital
  const imageMap = {
    // Banner principal y fondos
    "ciberseguridad_banner": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop",
    
    // Imágenes para secciones informativas
    "investigacion_ciberseguridad": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&h=400&auto=format&fit=crop",
    
    // Iconos para secciones
    "icono-proteccion": "https://img.icons8.com/fluency/96/shield.png",
    "icono-educacion": "https://img.icons8.com/fluency/96/graduation-cap.png",
    "icon_conciencia": "https://img.icons8.com/fluency/96/mind-map.png",
    "icon_politicas": "https://img.icons8.com/fluency/96/certificate.png",
    "icon_infraestructura": "https://img.icons8.com/fluency/96/server.png",
    "icon_educacion": "https://img.icons8.com/fluency/96/training.png",
    
    // Imágenes para recursos educativos
    "img_guia": "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400&h=250&auto=format&fit=crop",
    "img_infografia": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=400&h=250&auto=format&fit=crop",
    "img_video": "https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=400&h=250&auto=format&fit=crop",
    "img_curso": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=400&h=250&auto=format&fit=crop",
  };

  // Video fallbacks
  const videoMap = {
    "Liceo_Santa_Cruz_bxs0ix.mp4": "https://www.youtube.com/embed/dQw4w9WgXcQ" // Link a YouTube como respaldo
  };

  if (!publicId) {
    console.warn('Recurso sin ID proporcionado');
    return 'https://via.placeholder.com/400x300?text=Imagen+No+Disponible';
  }
  
  try {
    // Determinar si es imagen o video y devolver la URL adecuada
    if (resourceType === 'video') {
      return videoMap[publicId] || 'https://via.placeholder.com/640x360?text=Video+No+Disponible';
    } else {
      return imageMap[publicId] || `https://via.placeholder.com/400x300?text=${encodeURIComponent(publicId.replace(/_/g, ' '))}`;
    }
  } catch (error) {
    console.error('Error obteniendo URL del recurso:', error);
    return 'https://via.placeholder.com/400x300?text=Error+Al+Cargar+Imagen';
  }
};

/**
 * Helper function to check if an image exists at the given URL
 * @param {string} url - The URL to check
 * @returns {Promise<boolean>} Whether the image exists
 */
export const checkImageExists = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error verificando existencia de imagen:', error);
    return false;
  }
};

export default getCloudinaryUrl;