import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <Grid container className="navbarContainer">
        <Grid className="logoImg" item xs="1" md="0">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dmhprmqnk/image/upload/v1718284613/logoinherit_gos5nh.png"
              alt="logo"
            />
          </Link>
        </Grid>

        <Grid className="listContainer" item xs="8">
          <ul>
            <li>
              <a href="#">Todos</a>
            </li>
            <li>
              <a href="#">Botellas</a>
            </li>
            <li>
              <a href="#">Vasos</a>
            </li>
          </ul>
        </Grid>

        <Grid item xs="0">
          <CartWidget />
        </Grid>
      </Grid>
      <Outlet />
    </div>
  );
};

export default Navbar;
