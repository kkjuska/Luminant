import './paginas.css'

function Dashboard() {
  return (
    <div className='cont-dashboard-solo'>
      <main className='cont-feed-full'>
        <header className='feed-header'>
          <div className='dashboard-top-bar'>
            <h1>Dashboard</h1>
            <span className='tag-adm'>Administração</span>
          </div>
        </header>

        <section className='secao-dashboard-grid'>
          <div className='card-dash card-grafico-principal'>
            <div className='dash-metrica-header'>
              <div>
                <span className='dash-rotulo'>Usuários Ativos Agora</span>
                <h2 className='dash-valor-destaque texto-amarelo'>1.230</h2>
              </div>
              <div>
                <span className='dash-rotulo'>Total de Registrados</span>
                <h2 className='dash-valor-destaque texto-cinza'>10.150</h2>
              </div>
            </div>

            <div className='grafico-linha-container'>
              <div className='linha-grid'></div>
              <div className='linha-grid'></div>
              <div className='linha-grid'></div>
              <div className='svg-grafico-wrapper'>
                <svg viewBox="0 0 500 150" className="svg-grafico">
                  <path
                    d="M0,80 Q50,20 100,90 T200,30 T300,100 T400,40 T500,80"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="4"
                  />
                  <path
                    d="M0,100 Q50,40 100,110 T200,50 T300,120 T400,60 T500,100"
                    fill="none"
                    stroke="#3f3f46"
                    strokeWidth="3"
                  />
                  <circle cx="200" cy="30" r="6" fill="#eab308" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
              <div className='dias-semana'>
                <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
              </div>
            </div>
          </div>

          <div className='coluna-mini-cards'>
            <div className='grid-2-colunas'>
              <div className='card-dash mini-card'>
                <span className='dash-rotulo'>Novos Cadastros</span>
                <h3 className='dash-valor'>2.340</h3>
                <span className='dash-subtext verde'>+12% essa semana</span>
              </div>
              <div className='card-dash mini-card'>
                <span className='dash-rotulo'>Retenção</span>
                <h3 className='dash-valor'>1.300</h3>
                <span className='dash-subtext amarelo'>+5% este mês</span>
              </div>
            </div>

            <div className='grid-2-colunas'>
              <div className='card-dash mini-card card-progresso-circular'>
                <span className='dash-rotulo'>Uso Diário</span>
                <div className='circulo-progresso'>
                  <span>32%</span>
                </div>
              </div>
              <div className='card-dash mini-card card-progresso-circular'>
                <span className='dash-rotulo'>Meta Mensal</span>
                <div className='circulo-progresso amarelo-progresso'>
                  <span>45%</span>
                </div>
              </div>
            </div>
          </div>

          <div className='card-dash card-barras-status'>
            <div className='item-progresso-linha'>
              <div className='info-progresso'>
                <span>Posts Hoje</span>
                <strong>200</strong>
              </div>
              <div className='trilho-barras'><div className='preenchimento-barra' style={{ width: '60%' }}></div></div>
            </div>

            <div className='item-progresso-linha'>
              <div className='info-progresso'>
                <span>Comentários</span>
                <strong>345</strong>
              </div>
              <div className='trilho-barras'><div className='preenchimento-barra' style={{ width: '80%' }}></div></div>
            </div>

            <div className='item-progresso-linha'>
              <div className='info-progresso'>
                <span>Tutorias Acessados</span>
                <strong>121</strong>
              </div>
              <div className='trilho-barras'><div className='preenchimento-barra' style={{ width: '40%' }}></div></div>
            </div>
          </div>

          <div className='card-dash card-grafico-barras'>
            <span className='dash-rotulo'>Acessos Mensais de Usuários</span>
            <div className='barras-container'>
              <div className='coluna-bar' style={{ height: '50%' }}></div>
              <div className='coluna-bar' style={{ height: '35%' }}></div>
              <div className='coluna-bar' style={{ height: '85%' }}></div>
              <div className='coluna-bar' style={{ height: '65%' }}></div>
              <div className='coluna-bar' style={{ height: '45%' }}></div>
              <div className='coluna-bar' style={{ height: '35%' }}></div>
              <div className='coluna-bar' style={{ height: '55%' }}></div>
              <div className='coluna-bar' style={{ height: '75%' }}></div>
              <div className='coluna-bar' style={{ height: '50%' }}></div>
              <div className='coluna-bar' style={{ height: '40%' }}></div>
              <div className='coluna-bar' style={{ height: '70%' }}></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard