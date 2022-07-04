import imgColabore from "./Colabore.png";

function Colabore() {
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
        <h1>Junte-se</h1>
        <p>Você pode ser um colaborador, doando, codificando e sugestionado.</p>
      </span>
      <img src={imgColabore} height="345px" alt="Home" className="imgHome" />
    </div>
  );
}

export default Colabore;
