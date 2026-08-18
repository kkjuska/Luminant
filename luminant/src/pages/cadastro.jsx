import { useState } from 'react'
import { Link } from 'react-router-dom'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [nomeExibicao, setNomeExibicao] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  return (
    <div className='cadastro-side'>
      <div className='login-box'>
        <h1>Cadastro</h1>
        <form className='login-form' onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            placeholder='Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className='input-login'
          />
          <input
            type='text'
            placeholder='Nome de exibição'
            value={nomeExibicao}
            onChange={(e) => setNomeExibicao(e.target.value)}
            className='input-login'
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-login'
          />
          <input
            type='password'
            placeholder='Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='input-login'
          />
          <input
            type='password'
            placeholder='Confirmar sua senha'
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className='input-login'
          />
          <button type='submit' className='btn-entrar'>
            Cadastrar-se
          </button>
          <div className='links-auxiliares'>
            <Link to='/login' className='link-cadastro'>
              Já tem conta? Clique aqui
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cadastro