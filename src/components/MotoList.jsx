import React, { useState, useEffect } from 'react';
import { getMotos, deleteMoto } from '../services/motoService';
import { Link } from 'react-router-dom';

const MotoList = () => {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    getMotos().then(response => setMotos(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteMoto(id).then(() => {
      setMotos(motos.filter(moto => moto.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>Motos</h1>
      <Link to="/motos/new">
        <button>Agregar Moto</button>
      </Link>
      <ul>
        {motos.map(moto => (
          <li key={moto.id}>
            {moto.name}
            <div>
              <Link to={`/motos/${moto.id}`}>Ver Detalles</Link> | 
              <Link to={`/motos/edit/${moto.id}`}>Editar</Link> | 
              <button className="delete" onClick={() => handleDelete(moto.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MotoList;