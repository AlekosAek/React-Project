import { Link } from "react-router-dom";
import "../Components/css/Header.css"


function Header() {
  return (
    <header>
      <img className="logoImage" src="src\assets\LogoMy.jpg" alt="" />
      <div className="headerLinks">
        <Link to="/">
          Αρχικη
        </Link>
        <Link to="/ServicesPage">Services</Link>
        <Link to="/AboutMe">AboutMe</Link>
      </div>

    </header>
  );
}

export default Header;