import styles from "./Footer.css";
import { GiThink } from "react-icons/gi";

function Footer() {
  return (
    <footer>
      <p className="texto">
        <span className="textomin">Think...</span>
        <div className="caixa"></div>
        <p className="texto">
          <GiThink />
          Pense fora da caixa
        </p>
      </p>
    </footer>
  );
}

export default Footer;
