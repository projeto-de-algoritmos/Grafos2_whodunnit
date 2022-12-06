import '../grafo.css'
import { useNavigate } from 'react-router-dom'

function Grafo() {

    const navegar = useNavigate();

    const navegarParaExplicacao = () => {
        navegar('/explicacao');
    };

    return (
        <div className="Grafo">
            <h1 className='titulo-projeto'>Whodunnit ?</h1>
            <h3 className='subtitulo-projeto'>Resolvendo mistérios criminalísticos com grafos!</h3>
            <h2 className='descricao-problema'>
                Em uma investigação policial a cerca de um assassinato em um bairro do Brooklyn,
                os detetives Amy Santiago e Jake Peralta questionaram três suspeitos:
            </h2>
            <p className='nomes-suspeitos'>João</p>
            <p className='nomes-suspeitos'>Cauê</p>
            <p className='nomes-suspeitos'>Caio</p>
            <h2 className='descricao-problema'>
                <p>João disse que é inocente, Cauê acusou joão e Caio disse que também era inocente.</p>
                <p className='observacao'>Obs.: Apenas <strong>um</strong> está dizendo a verdade!</p>
                <p>
                    Com seu vasto conhecimento matemático, A detetive Santiago logo solucionou o crime.
                    Impressionado com a rapidez de Amy, o Capitão Holt pediu que a detetive Santiago
                    elaborasse um treinamento com a 99ª Delegacia de polícia do Brooklyn.
                </p>
            </h2>
            <button onClick={navegarParaExplicacao} className='botao-de-acesso'>Acessar treinamento</button>
        </div>
    )
}

export default Grafo
