import { Link } from "react-router-dom";
import styles from "./Navbar.css";
import Logo from "../logomarca.png";
import { AiOutlineHome } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <container className="navbar">
        <Link to="/">
          <img src={Logo} alt="logomarca" className="logos" />
        </Link>
        <ul className="list">
          <li>
            <Link to="/" className="linkH">
              <AiOutlineHome/>
            </Link>
          </li>
          <li>
            <Link to="/colabore" className="linkCL">
              COLABORE
            </Link>
          </li>
          <li>
            <Link to="/contato" className="linkCT">
              CONTATO
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="linkS">
              SOBRE
            </Link>
          </li>
        </ul>
      </container>
    </div>
  );
}

export default Navbar;
