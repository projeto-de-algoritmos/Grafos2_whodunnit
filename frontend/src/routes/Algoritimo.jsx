import { Suspeito } from '../../../backend/Suspeito.js'
import { Graph, EncontraSuspeitos } from '../../../backend/Graph.js';
import completo_Sus from '../assets/exemplo/completo.png';
import '../algoritimo.css'

const cores = {
    Caio: 'amarelo',
    João: 'azul',
    Cauê: 'vermelho'
}

export default function Algoritimo() {
    // Inicialização dos Suspeitos
    const sus1 = new Suspeito(1, 'João');
    const sus2 = new Suspeito(2, 'Cauê');
    const sus3 = new Suspeito(3, 'Caio');

    // Acusação dos suspeitos
    sus1.acusa([2, 3]);
    sus2.acusa([1]);
    sus3.acusa([1, 2]);

    // Inicialização do grafo
    let grafo = new Graph();

    // Adição dos nós e arestas
    grafo.addNode(sus1);
    grafo.addNode(sus2);
    grafo.addNode(sus3);
    grafo.addEdges(sus1);
    grafo.addEdges(sus2);
    grafo.addEdges(sus3);

    // console.log(grafo);
    const resultado = EncontraSuspeitos(grafo, 1);
    console.log(resultado);

    return (
        <div className='Algoritimo'>
            <h2 className='titulo-grafo'>Grafo para o algoritimo</h2>
            <img className='grafo' src={completo_Sus} alt="Grafo completo para o algoritimo" />
            <h2 className='titulo-resultado'>Resultado do Algoritimo para o caso de assassinato:</h2>
            <p className='resultado'>Assassino: <strong className={cores[resultado[0].assassino]}>{resultado[0].assassino}</strong></p>
        </div>
    );
}