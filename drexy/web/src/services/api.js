import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5689'
});

export default api;