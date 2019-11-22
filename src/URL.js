import axios from "axios";

const headers = {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
};

export const instance = axios.create({
    baseURL:'https://nz-social-media-api.herokuapp.com',
    timeout:3000,
    headers:headers
});