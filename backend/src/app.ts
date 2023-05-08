import express from "express"
import cors from "cors"
import appConfig from "./2-Utils/AppConfig"
import ikea_router from "./6-Controllers/ikea-controller"
import catchAll from "./3-Middleware/catch-all"
import routeNotFound from "./3-Middleware/route-not-found"
import authController from "./6-Controllers/autController"




const server= express()
server.use(cors())
server.use(express.json())

server.use("/api" , ikea_router)
server.use("/api", authController)
server.use("*", routeNotFound)
server.use(catchAll)


server.listen(appConfig.port, ()=> console.log(`I am listening to port ${appConfig.port}`))


console.log("i am app")