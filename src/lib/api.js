import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    //baseURL: 'https://cs301-api.onrender.com/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api