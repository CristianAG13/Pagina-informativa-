// Utility to help debug Cloudinary image loading issues
import getCloudinaryUrl from './cloudinary';

export const debugCloudinaryUrls = () => {
  const testImages = [
    { name: "ciberseguridad_banner", transformation: "w_1024,q_auto,f_auto" },
    { name: "investigacion_ciberseguridad", transformation: "w_600,h_400,c_fill,f_auto,q_auto" },
    { name: "icono-proteccion", transformation: "w_80,h_80,c_fill,f_auto,q_auto" },
    { name: "icono-educacion", transformation: "w_80,h_80,c_fill,f_auto,q_auto" },
    { name: "icon_conciencia", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "icon_politicas", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "icon_infraestructura", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "icon_educacion", transformation: "w_64,h_64,c_fill,f_auto,q_auto" },
    { name: "img_guia", transformation: "w_400,h_250,c_fill,f_auto,q_auto" },
    { name: "img_infografia", transformation: "w_400,h_250,c_fill,f_auto,q_auto" },
    { name: "img_video", transformation: "w_400,h_250,c_fill,f_auto,q_auto" },
    { name: "img_curso", transformation: "w_400,h_250,c_fill,f_auto,q_auto" }
  ];

  const videoResources = [
    { name: "Liceo_Santa_Cruz_bxs0ix.mp4", transformation: "w_1920,q_auto,f_auto", type: "video" }
  ];

  console.log("=== CLOUDINARY DEBUG ===");
  console.log("Testing image URLs:");
  testImages.forEach(img => {
    const url = getCloudinaryUrl(img.name, img.transformation);
    console.log(`${img.name}: ${url}`);
    
    // Test if image exists by creating an Image object
    const image = new Image();
    image.onload = () => console.log(`✅ ${img.name} loaded successfully`);
    image.onerror = () => console.log(`❌ ${img.name} failed to load`);
    image.src = url;
  });

  console.log("\nTesting video URLs:");
  videoResources.forEach(video => {
    const url = getCloudinaryUrl(video.name, video.transformation, video.type);
    console.log(`${video.name}: ${url}`);
  });
  
  console.log("=== END CLOUDINARY DEBUG ===");
  
  return {
    message: "Check browser console for Cloudinary debug information",
    success: true
  };
};

export default debugCloudinaryUrls;
