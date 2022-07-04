import imgSobre from "./Sobre.jpeg";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

function Sobre() {
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        padding: 45,
        display: "flex",
        margin: 14,
      }}
    >
      <span>
        <h1>União</h1>
        <p>
          A palavra que define esse projeto para todos os fins de um usuário,
          personalize de acordo com sua necessidade.
        </p>
      </span>
      <img src={imgSobre} height="345px" alt="Home" className="imgHome" />
    </div>
  );
}

export default Sobre;
