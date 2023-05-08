import { NavLink, useNavigate } from "react-router-dom";
import FurnitureModel from "../../../Models/FurnitureModel";
import "./Card.css";
import FurnitureService from "../../../Service/FurnitureService";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
interface card{
        furniture : FurnitureModel
}
function Card(props: card): JSX.Element {
    const navigate = useNavigate()

    const handleclick = (code : number)=> {
        FurnitureService.deleteFurniture(code)
        .then(()=> {
            alert("successfully deleted!")
            navigate("/home")
        })
        .catch(err=> {
            // alert(err.message)
            console.log(err)}
            )
     }

    return (
        <div className="Card">


  <p><strong>furnitureType : </strong>{props.furniture.furnitureType}</p>
  <p><strong>color: </strong>{props.furniture.color}</p>
  <p><strong>price : </strong>{props.furniture.price}</p>
  <p><strong>code : </strong>{props.furniture.code}</p>
  <p><strong>dimensions : </strong>{props.furniture.dimensions}</p>
  <NavLink to="#" onClick={()=>handleclick(props.furniture.code)}>delete furniture</NavLink>
        </div>
    );
}

export default Card;
