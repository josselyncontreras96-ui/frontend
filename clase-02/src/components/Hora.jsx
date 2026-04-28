import { useState } from "react";

function Hora() {
  //   let hora = Date.now();
  const [hora, setHora] = useState(Date.now());

  setTimeout(() => {
    // hora = Date.now();
    setHora(Date.now());
    console.log(hora);
  }, 1000);

  return <p>Hora {hora}</p>;
}

export default Hora;