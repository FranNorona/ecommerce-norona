import { products } from "../../products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../fireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
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
        <h1>Skeletons</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Aca van a ir los items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
