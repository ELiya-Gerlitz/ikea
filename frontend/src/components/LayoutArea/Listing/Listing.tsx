import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Listing.css";
import FurnitureService from "../../../Service/FurnitureService";
import FurnitureModel from "../../../Models/FurnitureModel";



function Listing(): JSX.Element {
    const [furniture, setFurniture] = useState<FurnitureModel[]>()

    useEffect(()=>{
        FurnitureService.getAllFurniture()
        .then(furniture=>{setFurniture(furniture)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="Listing">
			<h2>View All Furnitures</h2>
{furniture && 
<>
{furniture.map(f=> <Card key={f.code} furniture={f}/>)}
</>
}


           
        </div>
    );
}

export default Listing;
