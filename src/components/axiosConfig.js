import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // Asegúrate de poner la URL de tu API aquí
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;