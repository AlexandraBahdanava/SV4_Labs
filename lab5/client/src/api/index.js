import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

const host = axios.create({
    baseURL: 'http://localhost:3000/',
});

export default host;