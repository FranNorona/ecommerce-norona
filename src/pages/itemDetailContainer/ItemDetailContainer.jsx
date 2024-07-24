import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products";
import { CartContext } from "../../context/CartContext";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const {addToCart} = useContext(CartContext);

  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let objetoFinal = { ...item, quantity: quantity };
    addToCart(objetoFinal);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
