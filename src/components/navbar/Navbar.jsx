import  { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    <span className="icon">
                        <img src={logo} alt="Logo" />
                    </span>
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/popular_documents"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Popular Documents
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/reference"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Reference
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/blog"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/" onClick={handleClick}>
                            <FontAwesomeIcon icon={faGlobe} size="2x" />
                        </NavLink>
                    </li>
                    <div className="buttons">
                        <button type="button">Upload Photo</button>
                        <button type="button">
                            <FontAwesomeIcon icon={faApple} size="2x" /> Download
                        </button>
                    </div>
                </ul>

                {/* Hamburger Icon */}
                <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                        <span className="icon">✖</span> // 
                    ) : (
                        <span className="icon">☰</span> // 
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;