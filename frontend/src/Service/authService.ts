import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/AppConfig";
import CredentialsModel from "../Models/CredentialsModel";
// import CredencialsModel from "../Models/CredencialsModel";


async function register(user: UserModel):Promise<void>{
        const response = await axios.post<string>(appConfig.registerURL, user)
        const token = response.data
        sessionStorage.setItem("token", token)
}

async function login(credentials: CredentialsModel):Promise<void>{
    const response = await axios.post<string>(appConfig.loginURL, credentials)
    const token= response.data
    sessionStorage.setItem("token", token)

}

async function logout():Promise<void>{
sessionStorage.removeItem("token")}

export default{
    register,
    login,
     logout
}