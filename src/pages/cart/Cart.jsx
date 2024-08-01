import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./cart.css";

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
    <div className="cartContainer">
      <div className="productContainer">
        {cart.map((elemento) => {
          return (
            <div className="productReturn" key={elemento.id}>
              <div className="elementoTitle">
                <h2>{elemento.title}</h2>
                <h2>Cantidad: {elemento.quantity}</h2>
                <h2>Precio:{elemento.price}</h2>
              </div>
              <img src={elemento.img} alt="imagenproducto" />
              <button
                className="buttonDelete"
                onClick={() => handleDelete(elemento.id)}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
      <div className="conContainer">
        <div>
          <div>
            {cart.length > 0 ? (
              <h2 className="title">El total a pagar es ${total}</h2>
            ) : (
              <h2 className="ocultar">El carrito está vacío</h2>
            )}
          </div>
        </div>
        <div className="buttonsConContainer">
          <div>
            {cart.length > 0 && (
              <button className="buttonsStyle" onClick={clearCart}>
                Limpiar carrito{" "}
              </button>
            )}
          </div>
          <Link to="/checkout">
            {cart.length > 0 && (
              <button
                style={{
                  backgroundColor: cart.length > 0 ? "#cdb4db" : "red",
                  color: cart.length > 0 ? "black" : "white",
                  height: cart.length > 0 ? "50px" : "50px",
                  width: cart.length > 0 ? "150px" : "150px",
                }}
              >
                Finalizar compra
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
