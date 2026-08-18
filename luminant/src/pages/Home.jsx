import { useState } from 'react'
import Navbar from '../components/Navbar'
import Widgets from '../components/widgets'
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
              <button className='btn-acao'><img src="./coracao.png" alt="" /></button>
              <button className='btn-acao'><img src="./comentario.png" alt="" /></button>
              <button className='btn-acao'><img src="./repost.png" alt="" /></button>
              <button className='btn-acao'><img src="./link.png" alt="" /></button>
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
      <Widgets/>
    </div>
  )
}

export default Home