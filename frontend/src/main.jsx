import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Grafo from './routes/Grafo'
import Explicacao from './routes/Explicacao';
import Algoritimo from './routes/Algoritimo';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Grafo />,
  },
  {
    path: "/explicacao",
    element: <Explicacao />,
  },
  {
    path: "/algoritimo",
    element: <Algoritimo />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
