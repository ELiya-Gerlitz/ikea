import FurnitureModel from "../../../Models/FurnitureModel";
import "./Card.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
interface card{
        furniture : FurnitureModel
}
function Card(props: card): JSX.Element {
    
    return (
        <div className="Card">


  <p><strong>furnitureType : </strong>{props.furniture.furnitureType}</p>
  <p><strong>color: </strong>{props.furniture.color}</p>
  <p><strong>price : </strong>{props.furniture.price}</p>
  <p><strong>code : </strong>{props.furniture.code}</p>
  <p><strong>dimensions : </strong>{props.furniture.dimensions}</p>
			
        </div>
    );
}

export default Card;
