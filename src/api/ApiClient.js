import axios from 'axios';
import { BASE_URL, COMMON_HEADERS } from '../config';

export const marvelBE = axios.create(
    {
        baseURL: BASE_URL,
        headers: COMMON_HEADERS
    }
);