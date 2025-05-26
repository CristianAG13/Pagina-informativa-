import { Navigate, Route, Routes } from "react-router-dom"
import SimadPage from "../SimadPage"
import ImageGuide from "../pages/ImageGuide"
import Bibliografia from "../pages/Bibliografia"

export const SimadRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <SimadPage /> } />
        
        {/* Nueva ruta para la guía de imágenes */}
        <Route path="/guia-imagenes" element={ <ImageGuide /> } />
        
        {/* Ruta para la página de bibliografía completa */}
        <Route path="/bibliografia" element={ <Bibliografia /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
        
        {/* Rutas comentadas o eliminadas para evitar errores:
        <Route path="/login" element={ <LoginPage /> } /> 
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} /> 
        */}
    </Routes>
  )
}
