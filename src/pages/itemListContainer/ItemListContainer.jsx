import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { Box, Skeleton } from "@mui/material";
import { products } from "../../products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <div>
        <Skeleton variant="rounded" width={210} height={200} />
      </div>
    );
  }

  // const addProducts = () => {
  //   let productsCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);
  //   });
  // };

  return (
    <div>
      {/* {<button onClick={addProducts}>Agregar productos</button>} */}
      <ItemList items={items} />
      {/* {items.length === 0 ? <h1>Cargando.....</h1> : <ItemList items={items} />} */}
    </div>
  );
};

export default ItemListContainer;
