import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [emailOuNome, setEmailOuNome] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div className='login-side'>
      <div className='login-box'>
        <h1>Login</h1>
        <form className='login-form' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='Email ou nome'
            value={emailOuNome}
            onChange={(e) => setEmailOuNome(e.target.value)}
            className='input-login'
          />
          <input
            type='password'
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='input-login'
          />
          <button type='submit' className='btn-entrar'>
            Entrar agora
          </button>
          <div className='links-auxiliares'>
            <Link to='/forgot' className='link-esqueceu-senha'>
                Esqueceu sua senha?
            </Link>
            <Link to='/cadastro' className='link-cadastro'>
              Não tem conta? Clique aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login