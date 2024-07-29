import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro quieres eliminar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, borrar",
      denyButtonText: `No, no borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se elimino", "", "info");
      }
    });
  };

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
            <h2>{elemento.price}</h2>
            <button onClick={() => handleDelete(elemento.id)}>Eliminar</button>
          </div>
        );
      })}
      <h2 className={cart.length > 0 ? "title" : "ocultar"}>
        El total a pagar es {total}
      </h2>
      {cart.length > 0 && <button onClick={clearCart}>Limpiar carrito </button>}

      <Link to="/checkout">
        <button
          style={{
            backgroundColor: cart.length > 0 ? "blue" : "red",
          }}
        >
          Finalizar compra
        </button>
      </Link>
    </div>
  );
};

export default Cart;
