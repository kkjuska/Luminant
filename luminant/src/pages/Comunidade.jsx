import { useState } from 'react'
import Navbar from '../components/Navbar'
import Widgets from '../components/widgets'
import './paginas.css'

function Comunidade() {
  const [busca, setBusca] = useState('')

  return (
    <div className='cont-home'>
      <Navbar />

      <main className='cont-feed'>
        <header className='feed-header'>
          <h1>Comunidades</h1>
          
          <div className='input-busca-container'>
            <span className='icone-busca'>🔍</span>
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
          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <div className='info-comunidade'>
              <span className='titulo-resultado'>nome</span>
              <span className='descricao-comunidade'>descrição breve</span>
            </div>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <div className='info-comunidade'>
              <span className='titulo-resultado'>nome</span>
              <span className='descricao-comunidade'>descrição breve</span>
            </div>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <div className='info-comunidade'>
              <span className='titulo-resultado'>nome</span>
              <span className='descricao-comunidade'>descrição breve</span>
            </div>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <div className='info-comunidade'>
              <span className='titulo-resultado'>nome</span>
              <span className='descricao-comunidade'>descrição breve</span>
            </div>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <div className='info-comunidade'>
              <span className='titulo-resultado'>nome</span>
              <span className='descricao-comunidade'>descrição breve</span>
            </div>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <div className='info-comunidade'>
              <span className='titulo-resultado'>nome</span>
              <span className='descricao-comunidade'>descrição breve</span>
            </div>
          </div>

          <div className='card-resultado flex-user'>
            <div className='avatar-icon'>👤</div>
            <div className='info-comunidade'>
              <span className='titulo-resultado'>nome</span>
              <span className='descricao-comunidade'>descrição breve</span>
            </div>
          </div>
        </section>
      </main>
      <Widgets/>
    </div>
  )
}

export default Comunidade