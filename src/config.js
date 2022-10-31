import axios from "axios"

// Credenciales de mi app:
const appUsername = 'reactApp'
const appPassword = '123Test!'
const apiKey = 'nInAoSYP.1rgVHQjIgTO2EbJgfRxVZ7fdpzICWDAE'

// APIs, URLs y Endpoints:
export const BASE_URL = "https://inove-marvel-backend.herokuapp.com"

export const USER_ENDPOINTS = {
    userSignup: "/ecommerce/users/signup",
    userLogin: "/ecommerce/users/login"
}

export const CLIENT_ENDPOINTS = {
    clientSignup: "/ecommerce/clients/login"
}

export const COMMON_HEADERS = {
    "Content-Type": "application/json",
    "che": "application/json",
    'X-Api-Key': apiKey
}

// User data:

export const userDataStructure =
{
    userId: 0,
    firstName: "firstName",
    lastName: "lastName",
    username: "yourUsername",
    email: "youremail@inove.com.ar",
    phone: "+54-9-11-1234-5678",
    country: "yourCountry",
    provinceState: "yourState",
    city: "yourCity",
    postalCode: "yourPostalCode",
    password: "12345",
    token: null
}
