import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useEffect } from "react";
import authService from "../../../Service/authService";

function Logout(): JSX.Element {

const navigate= useNavigate()

useEffect(()=>{

    authService.logout()
    .then(()=>{
        alert("bye bye")
        navigate("/home")
    })
    .catch((err: any)=>console.log(err))
},[])
      
    return  null
}

export default Logout;