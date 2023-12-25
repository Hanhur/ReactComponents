import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? "activeLink link" : "nonactiveLink link"}>Home</NavLink>
                <NavLink to="/movies" className={({isActive}) => isActive ? "activeLink link" : "nonactiveLink link"}>Filmy</NavLink>
                <NavLink to="/serials" className={({isActive}) => isActive ? "activeLink link" : "nonactiveLink link"}>Serials</NavLink>
            </nav>          
        </header>
    );
}

export default Navbar;
