import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/denunciar">Denunciar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Inicio;