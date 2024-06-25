import { Grid } from "@mui/material";
import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <Grid container className="navbarContainer">
        <Grid className="logoImg" item xs="1">
          <img src="https://res.cloudinary.com/dmhprmqnk/image/upload/v1718284613/logoinherit_gos5nh.png"
          alt="logo"
          />
        </Grid>

        <Grid className="listContainer" item xs="6">
          <ul>
            <li>
              <a href="#">Vasos</a>
            </li>
            <li>
              <a href="#">Botellas</a>
            </li>
            <li>
              <a href="#">Deco</a>
            </li>
          </ul>
        </Grid>

        <Grid item xs="1">
          <CartWidget />
        </Grid>

      </Grid>
    </div>
  );
};

export default Navbar;