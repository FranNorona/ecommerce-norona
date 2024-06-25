export const ProductCard = ( { image, title, description, price }) =>  {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};