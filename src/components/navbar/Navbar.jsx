import { useState } from "react";
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
                <NavLink to="/" className="nav-logo">
                    <span className="icon">
                        <img src={logo} alt="Logo" />
                    </span>
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                            to="/popular_documents"
                            className={({ isActive }) => (isActive ? "nav-links active" : "nav-links")}
                            onClick={handleClick}
                        >
                            Popular Documents
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/reference"
                            className={({ isActive }) => (isActive ? "nav-links active" : "nav-links")}
                            onClick={handleClick}
                        >
                            Reference
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => (isActive ? "nav-links active" : "nav-links")}
                            onClick={handleClick}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" onClick={handleClick}>
                            <div style={{ width: '22px', height: '22px', color: 'black', }}>
                                <FontAwesomeIcon className="globe" icon={faGlobe} style={{ width: '100%', height: '100%', color: 'black', }} />
                            </div>
                        </NavLink>
                    </li>
                    <div className="buttons">
                        <button type="button" className="upload-button">Upload Photo</button>
                        <button type="button" className="download-button">
                            <FontAwesomeIcon style={{ width: '22px', height: '22px', color: 'white'}} icon={faApple} size="2x" /> Download
                        </button>
                    </div>
                </ul>

                {/* Hamburger Icon */}
                <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                        <span className="icon">✖</span> // Close icon
                    ) : (
                        <span className="icon">☰</span> // Open icon
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;