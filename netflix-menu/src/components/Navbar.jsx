import './Navbar.css';
import logo from '../images/netflix.png';
import { GiHamburgerMenu } from "react-icons/gi";
import links from '../data';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav>
            <div className="navigation">
                <div className="nav-header">
                    <img src={logo} alt="" />
                    <button onClick={() => setShowMenu(!showMenu) }>
                        <GiHamburgerMenu className="hamburger-icon"/>
                    </button>
                </div>
                <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
                    <ul>
                        {
                            links.map((oneLink) => {
                                const {id, url, text} = oneLink;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
