import caio_Sus from '../assets/exemplo/caio.png'
import caue_Sus from '../assets/exemplo/caue.png'
import completo_Sus from '../assets/exemplo/completo.png'
import joao_Sus from '../assets/exemplo/joao.png'
import '../explicacao.css'
import { useNavigate } from 'react-router-dom'

export default function Explicacao() {

    const navegar = useNavigate();

    const navegarParaAlgoritimo = () => {
        navegar('/algoritimo');
    };

    return (
        <div className='Explicacao'>
            <h1 className='titulo-explicacao'>Explicação</h1>
            <p className='explicacao-problema'>
                Utilizando nosso caso anterior, nós temos 3 suspeitos principais:
                <strong className='azul'> joão</strong>,
                <strong className='vermelho'> Cauê</strong> e
                <strong className='amarelo'> Caio</strong>.
                Utilizando a <strong>teoria de grafos</strong>, podemos montar o seguinte grafo
                direcionado com seus nomes e respectivas acusações:
            </p>
            <img className='grafo' src={completo_Sus} alt="Grafo completo com todos os casos" />
            <p className='explicacao-problema'>
                Onde cada nó representa um suspeito, e cada aresta representa uma acusação.
                Como João e Caio afirmaram ser inocentes,
                isso equivale à acusar todos os outros suspeitos.
            </p>
            <p className='explicacao-problema'>
                Como sabemos que apenas <strong>um</strong> está dizendo a verdade, faremos 3
                suposições, uma para cada suspeito:
            </p>
            <h3 className='suposicao'>Caso <strong className='azul'>João</strong> seja o assassino:</h3>
            <p className='explicacao-problema'>
                Podemos desconsiderar todas as arestas saindo de joão e assumir que ele estaria mentindo.
            </p>
            <img className='grafo' src={joao_Sus} alt="Grafo assumindo que joão seja o assassino" />
            <p className='explicacao-problema'>
                Assim, resta analisar as acusações dos outros suspeitos.
                Podemos ver pelo grafo que existem 2 arestas indo até João e isso significa que 2 pessoas estariam dizendo a verdade, pois apenas há um assassino.
            </p>
            <p className='explicacao-problema'>
                Com isso, descobrimos que João não pode ser o assassino, pois 2 pessoas teriam que estar falando a verdade para que isso acontecesse.
            </p>
            <h3 className='suposicao'>Caso <strong className='vermelho'>Cauê</strong> seja o assassino:</h3>
            <p className='explicacao-problema'>
                Podemos desconsiderar todas as arestas saindo de Cauê e assumir que ele estaria mentindo.
            </p>
            <img className='grafo' src={caue_Sus} alt="Grafo assumindo que Cauê seja o assassino" />
            <p className='explicacao-problema'>
                Assim, resta analisar as acusações dos outros suspeitos.
                Podemos ver pelo grafo que existem 2 arestas indo até Cauê e isso significa que 2 pessoas estariam dizendo a verdade, pois apenas há um assassino.
            </p>
            <p className='explicacao-problema'>
                Com isso, descobrimos que Cauê não pode ser o assassino, pois 2 pessoas teriam que estar falando a verdade para que isso acontecesse.
            </p>
            <h3 className='suposicao'>Por fim, Caso <strong className='amarelo'>Caio</strong> seja o assassino:</h3>
            <p className='explicacao-problema'>
                Podemos desconsiderar todas as arestas saindo de Cauê e assumir que ele estaria mentindo.
            </p>
            <img className='grafo' src={caio_Sus} alt="Grafo assumindo que Caio seja o assassino" />
            <p className='explicacao-problema'>
                Assim, resta analisar as acusações dos outros suspeitos.
                Podemos ver pelo grafo que existe apenas 1 aresta indo até Caio e isso significa que 1 pessoas estaria dizendo a verdade!
            </p>
            <p className='explicacao-problema'>
                Com isso, descobrimos que Caio é o assassino, pois apenas 1 pessoa está falando a verdade para que isso aconteça.
            </p>
            <h3 className='suposicao'> E se em duas ou mais suposições apenas uma pessoa estivesse dizendo a verdade?</h3>
            <p className='explicacao-problema'>
                Bem, caso o número de suspeitos diminua, a teoria dos grafos foi útil para reduzir a quantidade total de suspeitos.
                E caso não diminua, significa que precisamos de mais pistas!
            </p>
            <button onClick={navegarParaAlgoritimo} className='botao-de-acesso'>Ver algoritimo</button>
        </div>
    );
}