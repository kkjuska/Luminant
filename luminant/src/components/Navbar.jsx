import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <img src="./luminantlogo2.png" className="img-logo2" alt="" />
        <Link to="/">Home</Link>
        <Link to="/pagina1">Página 1</Link>
        <Link to="/pagina2">Página II</Link>
        <Link to="/pagina3">Página três</Link>
        <p className="ver">V1.0 termos - privacidade - suporte</p>
    </nav>
  )
}

export default Navbar
