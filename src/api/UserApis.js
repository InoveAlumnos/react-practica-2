import { USER_ENDPOINTS } from "../config";
import { marvelBE } from "./ApiClient";

export const signUpUser = async (firstName, lastName, email, username, password) => {
    const response = await marvelBE.post(
        USER_ENDPOINTS.userSignup,
        {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "username": username,
            "password": password
        }
    )
    return await response.data
}

export const loginUser = async (username, password) => {
    const response = await marvelBE.post(
        USER_ENDPOINTS.userLogin,
        {
            "username": username,
            "password": password
        }
    )
    return {
        "username": response.data.username,
        "uid": response.data.uid,
        "token": response.data.token
    }
}