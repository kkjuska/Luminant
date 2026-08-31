import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [nomeExibicao, setNomeExibicao] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState('')

  const navigate = useNavigate()

  async function cadastrar(e) {
    e.preventDefault()

    setErro('')
    setSucesso('')

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          username: nomeExibicao,
          email: email,
          password: senha
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.erro || 'Erro ao cadastrar usuário.')
      }

      setSucesso('Cadastro realizado com sucesso!')

      setNome('')
      setNomeExibicao('')
      setEmail('')
      setSenha('')
      setConfirmarSenha('')

      setTimeout(() => {
        navigate('/login')
      }, 1000)

    } catch (error) {
      setErro(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='cadastro-side'>
      <div className='login-box'>
        <h1>Cadastro</h1>

        <form className='login-form' onSubmit={cadastrar}>

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

          {erro && <p>{erro}</p>}
          {sucesso && <p>{sucesso}</p>}

          <button
            type='submit'
            className='btn-entrar'
            disabled={loading}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar-se'}
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