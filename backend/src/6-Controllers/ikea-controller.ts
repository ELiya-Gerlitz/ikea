import express, { NextFunction, Request, Response } from "express"
import ikeaLogic from "../5-Logic/ikeaLogic"
import FurnitureModel from "../4-Models/FurnitureModel"




const router= express.Router()

router.get("/furniture-types", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const furnitureTypes = await ikeaLogic.getAllFurnitureTypes()
        response.json(furnitureTypes)
    }catch(err:any){
        next(err)
    }
})

router.get("/furnitures", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const furnitures = await ikeaLogic.getAllFurnitures()
        response.json(furnitures)
    }catch(err:any){
        next(err)
    }
})

router.post("/furnitures", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const furnitureToAdd = new FurnitureModel(request.body)
        const addedFurniture = await ikeaLogic.addFurniture(furnitureToAdd)
        response.sendStatus(201)
    }catch(err:any){
        next(err)
    }
})

router.delete("/furnitures/:code", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const code = +request.params.code
        await ikeaLogic.deleteFurniture(code)
        response.sendStatus(204)
    }catch(err:any){
        next(err)
    }
})

export default router