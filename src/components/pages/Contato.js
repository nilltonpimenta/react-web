import imgContato from "./Contato.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaTwitterSquare,
} from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

function Contato() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 45,
        display: "flex",
        margin: 14,
      }}
    >
      <p>
        <FcApproval />
        Siga nossas redes sociais:
        <ul>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaInstagramSquare />
          </li>
          <li>
            <FaTwitterSquare />
          </li>
          <li>
            <FaTiktok />
          </li>
        </ul>
      </p>
      <img src={imgContato} height="345px" alt="Home" className="imgHome" />
    </div>
  );
}

export default Contato;
