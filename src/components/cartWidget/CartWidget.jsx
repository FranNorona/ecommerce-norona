import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="primary" showZero={true}>
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
}

export default CartWidget;
