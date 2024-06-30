import "./productcard.css";

export const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="cardContainer">
      <img src={image} alt="" />
      <div className="cardTitle">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>{price}</h4>
      </div>
    </div>
  );
};
