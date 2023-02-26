import axios from 'axios';

export const http = axios.create({
    baseURL: `${import.meta.env.VITE_API_ROUTE}/concom-api`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export default {

}
