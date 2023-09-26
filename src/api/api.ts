import axios from 'axios';

const API_URL: string = 'https://api.artic.edu/api/v1';
const $url = axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export {API_URL}
export default $url;
