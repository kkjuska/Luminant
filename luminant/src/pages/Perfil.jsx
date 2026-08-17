import Navbar from '../components/Navbar'
import './paginas.css'

function Perfil() {
  return (
    <div className='cont-home'>
      <Navbar />

      <main className='cont-feed'>
        <header className='feed-header'>
          <h1>Perfil</h1>

          <div className='perfil-header-info'>
            <div className='avatar-grande'>👤</div>

            <div className='perfil-detalhes'>
              <div className='perfil-nomes'>
                <h2 className='nome-usuario'>Nome</h2>
                <span className='tag-usuario'>@nome</span>
                <p className='bio-usuario'>Adicione uma bio</p>
              </div>

              <div className='perfil-estatisticas'>
                <div><strong>x</strong> Seguidores</div>
                <div><strong>x</strong> Seguindo</div>
              </div>
            </div>
          </div>
        </header>

        <div className='divisor-linha-perfil'></div>

        <section className='secao-portifolio'>
          <div className='titulo-portifolio'>
            <span className='barra-indicador rosa'></span>
            <h2>Portifolio</h2>
          </div>

          <div className='grid-portifolio'>
            <div className='card-midia card-add'>
              <span className='icone-mais'>+</span>
            </div>
            <div className='card-midia midia-retangulo'>VIDEO</div>
            <div className='card-midia midia-retangulo'>VIDEO</div>
            <div className='card-midia midia-quadrado'>FOTO</div>
            <div className='card-midia midia-quadrado'>FOTO</div>
            <div className='card-midia midia-retangulo'>VIDEO</div>
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

export default Perfil