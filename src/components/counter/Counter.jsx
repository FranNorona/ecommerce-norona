export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          width: "100%",
        }}
      >
        <button onClick={restar}>Restar</button>
        <h2 style={{ textAlign: "center" }}>{contador}</h2>
        <button onClick={sumar}>Sumar</button>
      </div>
      <button onClick={() => onAdd(contador)} style={{ width: "100%" }}>
        Agregar
      </button>
    </div>
  );
};
