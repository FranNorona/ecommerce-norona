import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary" showZero>
        <ShoppingCartIcon color="white" />
      </Badge>
    </Link>
  );
}

export default CartWidget;
