import { useState } from "react";

function Saludar() {
  const [nombre, setNombre] = useState("Josselyn");

  //   setTimeout(function () {
  //     setNombre(nombre + ".");
  //   }, 2000);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setNombre(event.target.value);
  };

  return (
    <>
      <input type="text" value={nombre} onChange={handleChange} />

      <h1>Hola {nombre}!</h1>
    </>
  );
}

export default Saludar;