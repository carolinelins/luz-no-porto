import axios from 'axios';

const api = axios.create({
    baseURL:'https://luznoportoback.herokuapp.com'
});

export default api;