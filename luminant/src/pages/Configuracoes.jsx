import Navbar from '../components/Navbar'
import './paginas.css'
import Widgets from '../components/widgets'

function Configuracoes() {
  return (
    <div className='cont-home'>
      <Navbar />

      <main className='cont-feed'>
        <header className='feed-header'>
          <h1>Configuração</h1>
        </header>

        <section className='secao-configuracoes'>
          <div className='card-config'>
            <div className='config-header-titulo'>
              <h2>Nome de usuário</h2>
              <p>Você só pode mudar o nome 1 vez por mês</p>
            </div>

            <div className='config-campo-box'>
              <div className='campo-info'>
                <span className='campo-rotulo'>Username:</span>
                <span className='campo-valor'>Nome</span>
              </div>
              <button className='btn-editar'><img src="lapis.png" alt="" /> editar</button>
            </div>

            <div className='config-campo-box'>
              <div className='campo-info'>
                <span className='campo-rotulo'>Nome de exibição:</span>
                <span className='campo-valor'>Nome</span>
              </div>
              <button className='btn-editar'><img src="lapis.png" alt="" /> editar</button>
            </div>
          </div>

          <div className='card-config'>
            <div className='config-header-titulo'>
              <h2>Foto de perfil</h2>
            </div>

            <div className='grid-fotos-perfil'>
              <div className='card-foto-upload'>
                <span className='icone-mais-foto'>+</span>
              </div>
              <div className='card-foto-item'>FOTO</div>
              <div className='card-foto-item'>FOTO</div>
            </div>

            <p className='aviso-foto'>
              O arquivo pode conter no máximo 5MB. E tem que ser jpeg, png ou GIF
            </p>
          </div>

          <div className='card-config'>
            <div className='config-header-titulo'>
              <h2>Segurança</h2>
            </div>

            <div className='config-campo-box'>
              <span className='campo-valor-bold'>Troque sua senha</span>
              <button className='btn-editar borda-amarela'><img src="lapis.png" alt="" /> editar</button>
            </div>

            <div className='config-campo-box'>
              <span className='campo-valor-bold'>Troque seu email</span>
              <button className='btn-editar borda-amarela'><img src="lapis.png" alt="" /> editar</button>
            </div>
          </div>
        </section>
      </main>
      <Widgets/>
    </div>
  )
}

export default Configuracoes