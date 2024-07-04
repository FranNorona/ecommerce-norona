export const Counter = ({ restar, contador, sumar }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "40%",
      }}
    >
      <button onClick={restar}>Restar</button>
      <h2 style={{ textAlign: "center" }}>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
