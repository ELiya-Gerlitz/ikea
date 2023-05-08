import axios from "axios";
import FurnitureModel from "../Models/FurnitureModel";
import appConfig from "../Utils/AppConfig";
import FurnitureTypes from "../Models/TypesModel";

async function getAllFurniture():Promise<FurnitureModel[]>{
    const response = await axios.get<FurnitureModel[]>(appConfig.furnitures)
    const furniture = response.data
    return furniture
}


async function getAllFurnitureTypes():Promise<FurnitureTypes[]>{
    const response = await axios.get<FurnitureTypes[]>(appConfig.furnituresTypes)
    const types = response.data
    return types
}

async function postOneFurniture(furniture : FurnitureTypes):Promise<void>{
    await axios.post<FurnitureTypes>(appConfig.furnitures, furniture)
}

async function deleteFurniture(code :number):Promise<void>{
    await axios.delete<void>(appConfig.furnitures+ code)
}


export default {
    getAllFurniture,
    getAllFurnitureTypes,
    postOneFurniture,
    deleteFurniture
}