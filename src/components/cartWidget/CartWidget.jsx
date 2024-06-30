import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function CartWidget() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}

export default CartWidget;
