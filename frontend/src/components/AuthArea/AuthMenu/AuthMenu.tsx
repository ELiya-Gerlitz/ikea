import { useNavigate } from "react-router-dom";
import "./AuthMenu.css";
import UserModel from "../../../Models/UserModel";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import authService from "../../../Service/authService";

function AuthMenu(): JSX.Element {
 const navigate= useNavigate()
//  const [user, setUser]=useState<UserModel>()

//  const [token, setToken] = useState<string>()
//  useEffect(()=>{
//     if(sessionStorage.getItem("token")){
//         // setToken(sessionStorage.getItem("token"))
//         authService.getAllUsers()
//         .then(user => setUser(user))
//         .catch((err: any)=>console.log(err))
//     }

//  },[])


    return (
        <div className="AuthMenu">
<NavLink to={"/register"} >register</NavLink> | 
<NavLink to={"/login"}>login</NavLink> |
<NavLink to={"/logout"}>logout</NavLink> |
			
        </div>
    );
}

export default AuthMenu;