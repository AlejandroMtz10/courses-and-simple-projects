import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const getVideogames = async () => {
    const response = await axios.get(`${API_URL}/videogames`);
    return response.data;
};
