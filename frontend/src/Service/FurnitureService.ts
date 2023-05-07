import axios from "axios";
import FurnitureModel from "../Models/FurnitureModel";
import appConfig from "../Utils/AppConfig";

async function getAllFurniture():Promise<FurnitureModel[]>{
    const response = await axios.get<FurnitureModel[]>(appConfig.furnitures)
    const furniture = response.data
    return furniture
}

export default {
    getAllFurniture
}