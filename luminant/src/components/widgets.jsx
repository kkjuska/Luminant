import "./widgets.css"

function Widgets() {
    return (
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
    )
}

export default Widgets