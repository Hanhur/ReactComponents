import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/all-movies">Filmy</NavLink>
                <NavLink to="/form">Pridani filmu</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;
