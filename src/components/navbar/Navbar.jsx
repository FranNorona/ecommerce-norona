import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="logoImg">
          <img src="https://res.cloudinary.com/dmhprmqnk/image/upload/v1718284613/logowhite_rzpsyd.jpg" alt="logo" />
        </div>
        
        <div className="listContainer">
            <ul>
                <li><a href="#">Vasos</a></li>
                <li><a href="#">Botellas</a></li>
                <li><a href="#">Deco</a></li>
            </ul>
        </div>

        <CartWidget />
    </div>
  )
}

export default Navbar