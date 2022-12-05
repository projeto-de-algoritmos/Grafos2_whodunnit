import { useState } from 'react'
import { Suspeito } from '../backend/Suspeito'
import { Graph, EncontraSuspeitos } from '../backend/Graph'
import cytoscape from 'cytoscape'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  let sus1 = new Suspeito(1, 'João');
  let sus2 = new Suspeito(2, 'Cauê');
  let sus3 = new Suspeito(3, 'Caio');
  sus1.acusa([2, 3]);
  sus2.acusa([3]);
  sus3.acusa([1, 2]);

  let grafo = new Graph();
  grafo.addNode(sus1);
  grafo.addNode(sus2);
  grafo.addNode(sus3);
  grafo.addEdges(sus1);
  grafo.addEdges(sus2);
  grafo.addEdges(sus3);

  let cy = cytoscape({
    container: document.getElementById('cy'),
  });

  grafo.graph.nodes.map((node) => {
    cy.add({
      group: 'nodes',
      data: { id: node.id }
    })
  });

  let edgeId = 1;
  grafo.graph.edges.map((edge) => {
    cy.add({
      group: 'edges',
      data: {
        id: edgeId,
        source: edge.source,
        target: edge.target,
        directed: true
      }
    })
    edgeId += 1;
  });

  return (
    <div className="App">
      <div id="cy"></div>
    </div>
  )
}

export default App
