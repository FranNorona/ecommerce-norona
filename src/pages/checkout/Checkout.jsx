import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const sendForm = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const captureData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Aca va el form</h1>

      <form onSubmit={sendForm}>
        <input
          type="text"
          placeholder="Ingresar nombre"
          onChange={captureData}
          name="nombre"
        />

        <input
          type="text"
          placeholder="Ingresar email"
          onChange={captureData}
          name="email"
        />

        <input
          type="text"
          placeholder="Ingresar telefono"
          onChange={captureData}
          name="telefono"
        />

        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
