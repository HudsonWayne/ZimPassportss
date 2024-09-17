import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"



const Navbar = () => {
  return (
    <div>
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li><Link to="/">Popular documents</Link></li>
                <li><Link to="/">Reference</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/"></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar