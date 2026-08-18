import { useState } from 'react'
import Navbar from '../components/Navbar'
import Widgets from '../components/widgets'
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
      <Widgets />
    </div>
  )
}

export default Buscar