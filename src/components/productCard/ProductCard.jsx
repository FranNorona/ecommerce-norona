import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, deleteDoc, doc } from "firebase/firestore";
import "./productcard.css";

export const ProductCard = ({ image, title, description, price, id }) => {
  const eliminar = () => {
    let productColl = collection(db, "products");
    let refDoc = doc(productColl, id);
    deleteDoc(refDoc);
  };
  return (
    <div>
      <Link to={`/itemDetail/${id}`} className="cardContainer">
        <img src={image} alt="" />
        <div className="cardTitle">
          <h2>{title}</h2>
          <h3>{description}</h3>
          <h4>${price}</h4>
        </div>
      </Link>
      {/* <div className="buttonDeleteCon">
        <button onClick={eliminar} className="buttonDelete">
          Eliminar
        </button>
      </div> */}
    </div>
  );
};
