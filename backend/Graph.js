//Estrutura básica do Grafo para integração com o react-graph-vis
export class Graph {
    graph = {
        nodes:[],
        edges:[]
    };
    events = {
        select: ({nodes, edges}) => {
            console.log(nodes);
            console.log(edges);
        }
    };
    options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
    };
    // Adição de nós no grafo
    addNode(node) {
        this.graph.nodes.push({
            id: node.id,
            label: node.nome,
            title: node.nome
        });
    }
    // Adição de arestas no grafo
    // A função aceita um nó do tipo Suspeito, e preenche as arestas do grafo
    addEdges(baseNode){
        baseNode.acusacoes.map((targetNodeId) => {
            this.graph.edges.push({
                from: baseNode.id,
                to: targetNodeId
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
            console.log(edge);
            if (edge.from === node.id){
                return;
            }
            if (edge.to === node.id){
                verdades += 1;
            }
        });
        possibilidades.push({
            assassino: node.label,
            verdades: verdades
        });
        verdades = 0;
    });
    let solucao = [];
    console.log(possibilidades);
    possibilidades.map((possibilidade) => {
        if (possibilidade.verdades === numDeVerdades)
            solucao.push(possibilidade);
    });
    return (solucao);
}