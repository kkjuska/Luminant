import { useState } from 'react'
import Navbar from '../components/Navbar'
import './paginas.css'

function Home() {
  const [abaAtiva, setAbaAtiva] = useState('para-voce')

  return (
    <div className='cont-home'>
      <Navbar />

      <main className='cont-feed'>
        <header className='feed-header'>
          <h1>Feed</h1>
          <div className='abas-feed'>
            <button 
              className={abaAtiva === 'para-voce' ? 'active' : ''} 
              onClick={() => setAbaAtiva('para-voce')}
            >
              Para você
            </button>
            <button 
              className={abaAtiva === 'seguindo' ? 'active' : ''} 
              onClick={() => setAbaAtiva('seguindo')}
            >
              seguindo
            </button>
            <button 
              className={abaAtiva === 'atividade' ? 'active' : ''} 
              onClick={() => setAbaAtiva('atividade')}
            >
              Minha atividade
            </button>
          </div>
        </header>

        <section className='feed-posts'>
          <article className='card-post'>
            <div className='post-autor'>
              <div className='avatar-icon'>👤</div>
              <span className='nome-autor'>Nome</span>
            </div>
            <p className='post-texto'>Olha esse video que eu fiz</p>
            <div className='media-box video-box'>VIDEO</div>
            <div className='post-acoes'>
              <button className='btn-acao'>♡</button>
              <button className='btn-acao'>💬</button>
              <button className='btn-acao'>🔄</button>
              <button className='btn-acao'>🔗</button>
            </div>
          </article>
          <article className='card-post'>
            <div className='post-autor'>
              <div className='avatar-icon'>👤</div>
              <span className='nome-autor'>Nome</span>
            </div>
            <p className='post-texto'>To com um problema no premier alguem sabe resolver</p>
            <div className='media-box foto-box'>FOTO</div>

            <div className='thread-comentario'>
              <div className='post-autor'>
                <div className='avatar-icon'>👤</div>
                <span className='nome-autor'>Nome</span>
              </div>
              <p className='post-texto'>Achou solução? Estou com o mesmo problema</p>
            </div>
          </article>
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

export default Home