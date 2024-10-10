import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MotoList from './components/MotoList';
import MotoForm from './components/MotoForm';
import MotoDetail from './components/MotoDetail';
import './App.css'; // Importa los estilos

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MotoList />} />
        <Route path="/motos/new" element={<MotoForm />} />
        <Route path="/motos/:id" element={<MotoDetail />} />
        <Route path="/motos/edit/:id" element={<MotoForm />} />
      </Routes>
    </Router>
  );
}

export default App;