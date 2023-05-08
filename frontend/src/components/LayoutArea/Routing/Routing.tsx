import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Listing from "../Listing/Listing";
import AddFurniture from "../AddFurniture/AddFurniture";
import Home from "../Home/Home";
import Register from "../../AuthArea/Register/Register";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			I am routing
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/furniture" element={<Listing/>} />
                <Route path="/add-furniture" element={<AddFurniture/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </div>
    );
}

export default Routing;
