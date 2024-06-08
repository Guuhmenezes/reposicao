import axios from 'axios';

const api = axios.create({
    /**
     * Alterar o IP da API sempre que necessário
     */
    baseURL: 'http://192.168.4.125:5526'
});

export default api;