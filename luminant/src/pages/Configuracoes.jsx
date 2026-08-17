import Navbar from '../components/Navbar'
import './paginas.css'

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
              <button className='btn-editar'>✏️ editar</button>
            </div>

            <div className='config-campo-box'>
              <div className='campo-info'>
                <span className='campo-rotulo'>Nome de exibição:</span>
                <span className='campo-valor'>Nome</span>
              </div>
              <button className='btn-editar'>✏️ editar</button>
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
              <button className='btn-editar borda-amarela'>✏️ editar</button>
            </div>

            <div className='config-campo-box'>
              <span className='campo-valor-bold'>Troque seu email</span>
              <button className='btn-editar borda-amarela'>✏️ editar</button>
            </div>
          </div>
        </section>
      </main>

      <aside className='cont-widgets'>
        <div className='widget-grupo'>
          <div className='widget-titulo'>
            <span className='barra-indicador amarelo'></span>
            <h2>Em alta</h2>
          </div>
          <ul className='widget-lista'>
            <li>tema 1</li>
            <li>tema 2</li>
            <li>tema 3</li>
            <li>tema 4</li>
            <li>tema 5</li>
          </ul>
        </div>

        <div className='divisor-linha'></div>

        <div className='widget-grupo'>
          <div className='widget-titulo'>
            <span className='barra-indicador azul'></span>
            <h2>Editores Destaque</h2>
          </div>
          <div className='lista-editores'>
            <div className='editor-item'><div className='avatar-icon'>👤</div> Nome 1</div>
            <div className='editor-item'><div className='avatar-icon'>👤</div> Nome 2</div>
            <div className='editor-item'><div className='avatar-icon'>👤</div> Nome 3</div>
            <div className='editor-item'><div className='avatar-icon'>👤</div> Nome 4</div>
            <div className='editor-item'><div className='avatar-icon'>👤</div> Nome 5</div>
          </div>
        </div>

        <div className='divisor-linha'></div>

        <div className='widget-grupo'>
          <div className='widget-titulo'>
            <span className='barra-indicador verde'></span>
            <h2>Tutorias Populares</h2>
          </div>
          <ul className='widget-lista'>
            <li>tutorial 1</li>
            <li>tutorial 2</li>
            <li>tutorial 3</li>
            <li>tutorial 4</li>
            <li>tutorial 5</li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Configuracoes