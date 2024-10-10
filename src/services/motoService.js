import axios from 'axios';

const API_URL = 'http://localhost:8080/api/motos';

const getMotos = () => axios.get(API_URL);
const getMotoById = (id) => axios.get(`${API_URL}/${id}`);
const createMoto = (moto) => axios.post(API_URL, moto);
const updateMoto = (id, moto) => axios.put(`${API_URL}/${id}`, moto);
const deleteMoto = (id) => axios.delete(`${API_URL}/${id}`);

export { getMotos, getMotoById, createMoto, updateMoto, deleteMoto };