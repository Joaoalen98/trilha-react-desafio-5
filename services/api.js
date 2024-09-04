import axios from 'axios';

export const api  = axios.create({
    baseURL: env.BASE_URL,
    headers: {
        apikey: env.API_KEY,
        authorization: env.BEARER_TOKEN
    }
})
