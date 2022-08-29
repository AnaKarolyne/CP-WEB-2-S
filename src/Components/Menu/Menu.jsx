import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {

  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/Semaforo">Semáforo</Link></li>
                <li><Link to="/Carteirinha">Carteirinha</Link></li>
                <li><Link to="/ListaCarros">Carros</Link></li>
            </ul>
        </nav>
    </header>
  )
}
