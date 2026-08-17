import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-top">
        <div className="logo-container">
          <img src="./luminantlogo2.png" className="img-logo2" alt="Luminant Logo" />
        </div>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <img src="./feed.png" alt="" className="nav-icon" />
            <span>Feed</span>
            <span className="dot-ativa"></span>
          </NavLink>

          <NavLink to="/buscar" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <img src="./lupa.png" alt="" className="nav-icon" />
            <span>buscar</span>
            <span className="dot-ativa"></span>
          </NavLink>

          <NavLink to="/perfil" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <img src="./perfil.png" alt="" className="nav-icon" />
            <span>Perfil</span>
            <span className="dot-ativa"></span>
          </NavLink>

          <NavLink to="/comunidade" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <img src="./comunidade.png" alt="" className="nav-icon" />
            <span>Comunidades</span>
            <span className="dot-ativa"></span>
          </NavLink>

          <NavLink to="/configuracoes" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <img src="./opcoes.png" alt="" className="nav-icon" />
            <span>Configuração</span>
            <span className="dot-ativa"></span>
          </NavLink>
        </div>
      </div>

      <div className="nav-bottom">
        <div className="ver-container">
          <p className="ver">v1.0</p>
          <p className="ver">termos • privacidade • suporte</p>
        </div>

        <div className="linhaNav"></div>

        <div className="usuario-bottom">
          <div className="avatar-user">👤</div>
          <span className="nome-user">Nome</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar