import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPass() {
  const [email, setEmail] = useState('')
  const [mensagemSucesso, setMensagemSucesso] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setMensagemSucesso(true)
    }
  }

  return (
    <div className='login-box'>
      <h1>Recuperar Senha</h1>
      <p style={{ color: '#a0a0a0', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        Digite o seu e-mail cadastrado para receber as instruções de redefinição de senha.
      </p>

      {mensagemSucesso ? (
        <div style={{ color: '#4caf50', marginBottom: '1.5rem', textAlign: 'center' }}>
          E-mail de recuperação enviado com sucesso! Verifique sua caixa de entrada.
        </div>
      ) : (
        <form className='login-form' onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Seu e-mail cadastrado'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-login'
            required
          />

          <button type='submit' className='btn-entrar'>
            Enviar link de recuperação
          </button>
        </form>
      )}

      <div className='links-auxiliares' style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <Link to='/login' className='link-cadastro'>
          Lembrou a senha? Voltar para o Login
        </Link>
      </div>
    </div>
  )
}

export default ForgotPass