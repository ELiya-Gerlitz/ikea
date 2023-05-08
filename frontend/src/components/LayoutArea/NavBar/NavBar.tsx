import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(): JSX.Element {
    return (
        <div className="NavBar">
            <NavLink to={"/home"}>Home</NavLink> | 
            <NavLink to={"/add-furniture"}>Add furniture</NavLink> | 
            <NavLink to={"/furniture"}>Watch all furnitures</NavLink> | 
        </div>
    );
}

export default NavBar;
