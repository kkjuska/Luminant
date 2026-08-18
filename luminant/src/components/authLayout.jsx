import { Outlet, useLocation } from 'react-router-dom'
import './authLayout.css'

function AuthLayout() {
  const location = useLocation()
  const isCadastro = location.pathname === '/cadastro'

  return (
    <div className={`auth-container ${isCadastro ? 'cadastro-active' : ''}`}>

      <div className='auth-content'>
        <Outlet />
      </div>
      <div className='auth-overlay-panel'>
        <img src="./luminantLogo.png" alt="Logo Luminant" className='login-logo' />
      </div>

    </div>
  )
}

export default AuthLayout