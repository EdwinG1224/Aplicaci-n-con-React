import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createMoto, getMotoById, updateMoto } from '../services/motoService';

const MotoForm = () => {
  const [moto, setMoto] = useState({ name: '', brand: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getMotoById(id).then(response => setMoto(response.data));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      updateMoto(id, moto).then(() => navigate('/'));
    } else {
      createMoto(moto).then(() => navigate('/'));
    }
  };

  return (
    <div className="container">
      <h1>{id ? 'Editar Moto' : 'Agregar Moto'}</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={moto.name}
          onChange={(e) => setMoto({ ...moto, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Marca"
          value={moto.brand}
          onChange={(e) => setMoto({ ...moto, brand: e.target.value })}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default MotoForm;