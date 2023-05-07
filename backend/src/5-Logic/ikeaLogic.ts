import dal from "../2-Utils/dal";
import OkPacket from "mysql"
import FurnitureModel from "../4-Models/FurnitureModel";


async function getAllFurnitureTypes():Promise<FurnitureModel[]>{
    const sql = `
    SELECT * FROM furnituretype
    `
    const allCategories = await dal.execute(sql)
    return allCategories
}


async function getAllFurnitures():Promise<FurnitureModel[]>{
    const sql = `
    SELECT furniture.* , furnituretype.furnitureType
    FROM furniture JOIN furnituretype
    ON furniture.furnitureTypeId = furnituretype.furnituretypeId
    `
    const allCategories = await dal.execute(sql)
    return allCategories
}

async function addFurniture(furnitureToAdd : FurnitureModel):Promise<FurnitureModel>{
    const sql = `
   INSERT INTO furniture
   VALUES(
    NULL,
    ?,
    ?,
    ?,
    ?
   )
    `
    const values = [furnitureToAdd.furnitureTypeId, furnitureToAdd.dimensions, furnitureToAdd.color, furnitureToAdd.price]
    const info : OkPacket = await dal.execute(sql, values)
    furnitureToAdd.code = info.insertId
    return furnitureToAdd
}




export default {
    getAllFurnitureTypes,
    getAllFurnitures,
    addFurniture
}