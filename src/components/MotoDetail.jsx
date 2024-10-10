import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMotoById } from '../services/motoService';

const MotoDetail = () => {
  const { id } = useParams();
  const [moto, setMoto] = useState(null);

  useEffect(() => {
    getMotoById(id).then(response => setMoto(response.data));
  }, [id]);

  if (!moto) return <div>Cargando...</div>;

  return (
    <div className="container">
      <h1>Detalles de la Moto</h1>
      <p>Nombre: {moto.name}</p>
      <p>Marca: {moto.brand}</p>
    </div>
  );
};

export default MotoDetail;