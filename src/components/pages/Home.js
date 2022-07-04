import imgHome from "../logomarca.png";
import styles from "./module.css";


function Home() {
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
      <span>
        <h1>PentatoniX</h1>
        <p>Um sistema operacional do seu jeito. </p>
      </span>
      <img src={imgHome} height="345px" alt="Home" className="imgHome" />
    </div>
  );
}

export default Home;
