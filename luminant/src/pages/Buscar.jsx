import { useState } from 'react'
import Navbar from '../components/Navbar'
import './paginas.css'

function Buscar() {
  const [busca, setBusca] = useState('')

  return (
    <div className='cont-home'>
      <Navbar />

      <main className='cont-feed'>
        <header className='feed-header'>
          <h1>Buscar</h1>
          
          <div className='input-busca-container'>
            <span className='icone-busca'><img src="./lupa.png" alt="" /></span>
            <input 
              type='text' 
              placeholder='Buscar temas, problemas ou @usuarios' 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className='input-busca'
            />
          </div>
        </header>

        <section className='lista-resultados'>
          <div className='card-resultado'>
            <span className='titulo-resultado'>Tema</span>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <span className='titulo-resultado'>nome</span>
          </div>

          <div className='card-resultado'>
            <span className='titulo-resultado'>tutorial</span>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <span className='titulo-resultado'>nome</span>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <span className='titulo-resultado'>nome</span>
          </div>

          <div className='card-resultado'>
            <span className='titulo-resultado'>tema</span>
          </div>

          <div className='card-resultado'>
            <span className='titulo-resultado'>tutorial</span>
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

export default Buscar