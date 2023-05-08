import { useNavigate } from "react-router-dom";
import "./AuthMenu.css";
import UserModel from "../../../Models/UserModel";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function AuthMenu(): JSX.Element {
 const navigate= useNavigate()
 const [user, setUser]=useState<UserModel>()

    // useEffect(()=>{
    //     setUser(AuthStore.getState().user)

    //     const unsubscribe = AuthStore.subscribe(() =>
    //      setUser(AuthStore.getState().user)
    // )
        // return ()=> unsubscribe()
    // },[])
    

    return (
        <div className="AuthMenu">
<NavLink to={"/register"}>register</NavLink> | 
<NavLink to={"/login"}>login</NavLink> |
<NavLink to={"/logout"}>logout</NavLink> |
			
        </div>
    );
}

export default AuthMenu;