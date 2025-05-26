import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { SimadRoutes } from './PaginaInformativa/routes/SimadRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <SimadRoutes />
    </BrowserRouter>
  )
}

export default App
