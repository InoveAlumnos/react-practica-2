import axios from 'axios';
import { baseUrl, apiKey } from '../config';


export const comicsList = 'ecommerce/comics/get'
export const usersSignup = 'ecommerce/users/signup'
export const usersLogin = 'ecommerce/users/login'

export const eCommerceApi = axios.create({
    baseURL: baseUrl,
    headers: {
        'accept': 'application/json',
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
  });