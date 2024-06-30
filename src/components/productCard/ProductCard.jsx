import { Link } from "react-router-dom";
import "./productcard.css";

export const ProductCard = ({ image, title, description, price, id }) => {
  return (
    <Link to={`/itemDetail/${id}`} className="cardContainer">
      <img src={image} alt="" />
      <div className="cardTitle">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>{price}</h4>
      </div>
    </Link>
  );
};
