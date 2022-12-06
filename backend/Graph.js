//Estrutura básica do Grafo para integração com o react-graph-vis
export class Graph {
    graph = {
        nodes: [],
        edges: []
    };
    // Adição de nós no grafo
    addNode(node) {
        this.graph.nodes.push({
            id: node.id,
            nome: node.nome,
        });
    }
    // Adição de arestas no grafo
    // A função aceita um nó do tipo Suspeito, e preenche as arestas do grafo
    addEdges(baseNode) {
        baseNode.acusacoes.map((targetNodeId) => {
            this.graph.edges.push({
                source: baseNode.id,
                target: targetNodeId
            })
        })
    }
}

//Função que encontra todos os suspeitos e retorna um array com as possibilidades
export function EncontraSuspeitos(grafo, numDeVerdades) {
    // A função consiste em encontrar o número de possibilidades com base nas acusações da cada suspeito
    /* A ideia é: 
        1° Assumir que um suspeito é o assassino
        2° Construir o grafo contando com as acusações de todos os suspeitos, menos o suspeito atual (assassino)
        3° Contar o número de acusações indo até o suspeito atual
        4° Armazenar em um array contendo o número de acusações
        5° Repetir o processo acima para todos os suspeitos
        6° Retornar o array com as possibilidades baseado na resposta final
    */
    let possibilidades = [];
    let verdades = 0;
    grafo.graph.nodes.map((node) => {
        // * A variável node é o suspeito atual (assumo que é o assassino)
        // Para cada aresta
        const edges = grafo.graph.edges;
        edges.map((edge) => {
            if (edge.source === node.id) {
                return;
            }
            if (edge.target === node.id) {
                verdades += 1;
            }
        });
        possibilidades.push({
            assassino: node.nome,
            verdades: verdades
        });
        verdades = 0;
    });
    let solucao = [];
    possibilidades.map((possibilidade) => {
        if (possibilidade.verdades === numDeVerdades)
            solucao.push(possibilidade);
    });
    return (solucao);
}