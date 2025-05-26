import { Navigate, Route, Routes } from "react-router-dom"
import SimadPage from "../SimadPage"
import LoginPage from "../../../auth/pages/LoginPage"
import ImageGuide from "../pages/ImageGuide"

export const SimadRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <SimadPage /> } />
        
        {/* Nueva ruta para la guía de imágenes */}
        <Route path="/guia-imagenes" element={ <ImageGuide /> } />
        
        <Route path="/*" element={ <Navigate to="/" /> } />
        
        <Route path="/login" element={ <LoginPage /> } /> 

        {/* <Route path="forgot-password" element={<ForgotPassword />} />

        <Route path="reset-password" element={<ResetPassword />} /> */}
    </Routes>
  )
}
