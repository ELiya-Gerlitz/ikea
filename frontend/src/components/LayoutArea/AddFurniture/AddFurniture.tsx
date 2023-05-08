import { useForm } from "react-hook-form";
import FurnitureModel from "../../../Models/FurnitureModel";
import "./AddFurniture.css";
import { useEffect, useState } from "react";
import FurnitureService from "../../../Service/FurnitureService";
import FurnitureTypes from "../../../Models/TypesModel";
import { useNavigate } from "react-router-dom";

function AddFurniture(): JSX.Element {
    const {handleSubmit, register} = useForm<FurnitureModel>()
    const [type, setType] = useState<FurnitureTypes[]>()
    const navigate = useNavigate()
    useEffect(()=>{
        FurnitureService.getAllFurnitureTypes()
        .then(type=>{
            setType(type)
        })
        .catch(err=>console.log(err))
    },[])

    const send = (info : FurnitureModel) => {
        FurnitureService.postOneFurniture(info)
        .then(()=> {
            console.log(info)
        alert("successfully added!")
        navigate("/furniture")
    })
        .catch(err=>console.log(err))
    }
    return (
        <div className="AddFurniture">
			<h2>Add furniture</h2>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="color" {...register("color")}/><br></br>
                <input type="text" placeholder="price" {...register("price")}/><br></br>
                <input type="text" placeholder="dimensions" {...register("dimensions")}/><br></br>
                
                <select defaultValue="" {...register("furnitureTypeId")}>
                    <option disabled value={""}>select a category name </option>
                    {type && type.map(t=> <option key={t.furnitureTypeId} value={t.furnitureTypeId}>{t.furnitureType}</option> )}
                </select><br></br>

                <button>add new furniture</button>

            </form>
        </div>
    );
}

export default AddFurniture;
