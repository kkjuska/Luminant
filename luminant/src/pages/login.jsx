import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [emailOuNome, setEmailOuNome] = useState('')
  const [senha, setSenha] = useState('')

  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  const navigate = useNavigate()

  async function entrar(e) {
    e.preventDefault()

    setErro('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailOuNome,
          password: senha
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.erro || 'Email ou senha inválidos.')
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      navigate('/')

    } catch (error) {
      setErro(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='login-side'>
      <div className='login-box'>
        <h1>Login</h1>

        <form className='login-form' onSubmit={entrar}>

          <input
            type='text'
            placeholder='Email'
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

          {erro && <p>{erro}</p>}

          <button
            type='submit'
            className='btn-entrar'
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar agora'}
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