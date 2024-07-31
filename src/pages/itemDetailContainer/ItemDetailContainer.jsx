import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../products";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "sonner";
import ItemDetail from "./ItemDetail";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const [item, setItem] = useState({});

  let initial = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (quantity) => {
    let objetoFinal = { ...item, quantity: quantity };
    addToCart(objetoFinal);

    toast.success("Producto Agregado");
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
