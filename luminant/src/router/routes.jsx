import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Buscar from "../pages/Buscar";
import Perfil from "../pages/Perfil";
import Comunidade from "../pages/Comunidade";
import Configuracoes from "../pages/Configuracoes"
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/buscar", element: <Buscar />},
    {path: "/perfil", element: <Perfil />},
    {path: "/comunidade", element: <Comunidade />},
    {path: "/configuracoes", element: <Configuracoes/>},
    {path: "/dashboard", element: <Dashboard />}
])

export default router;
