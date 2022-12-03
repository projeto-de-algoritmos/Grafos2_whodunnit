//Estrutura básica do Grafo
export class Graph {
    graph = {
        nodes:[],
        edges:[]
    };
    events = {
        select: function(event) {
            var {nodes, edges} = event;
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
}

//Função que encontra todos os suspeitos e retorna um array com as possibilidades
export function EncontraSuspeitos(graph, numDeVerdades) {

}