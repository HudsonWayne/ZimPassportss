import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="Logo" />
                <ul>
                    <li><Link to="/popular_documents">Popular Documents</Link></li>
                    <li><Link to="/reference">Reference</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/"> <FontAwesomeIcon icon={faGlobe} size="2x" /></Link></li>
                    <div className="buttons">
                        <button type="button">Upload Photo</button>
                        <button type="button"><FontAwesomeIcon icon={faApple} size="2x" /> Download</button>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;