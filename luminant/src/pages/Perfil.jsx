import Navbar from '../components/Navbar'
import './paginas.css'
import Widgets from '../components/widgets'

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
      
      <Widgets/>
    </div>
  )
}

export default Perfil