import { Graph, EncontraSuspeitos } from './Graph.js'
import { Suspeito } from './Suspeito.js'

let sus1 = new Suspeito(1, 'João');
let sus2 = new Suspeito(2, 'Lucas');
let sus3 = new Suspeito(3, 'Matheus');

sus1.acusa([2,3]);
sus2.acusa([1]);
sus3.acusa([1,2]);

console.log(sus1);
console.log(sus2);
console.log(sus3);

let grafo = new Graph();
grafo.addNode(sus1);
grafo.addNode(sus2);
grafo.addNode(sus3);

grafo.addEdges(sus1);
grafo.addEdges(sus2);
grafo.addEdges(sus3);

console.log(grafo.graph);
console.log(EncontraSuspeitos(grafo, 1));