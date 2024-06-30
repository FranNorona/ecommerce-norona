import { ProductCard } from "../../components/productCard/ProductCard.jsx";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "2px",
        backgroundColor: "white",
      }}
    >
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            image={elemento.img}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;