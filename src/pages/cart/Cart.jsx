import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProduct } = useContext(CartContext);

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ border: "2px solid black", width: "200px" }}
          >
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <button onClick={() => deleteProduct(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      <button onClick={clearCart}>Vaciar carrito </button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
