import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const fakeProducts = [
    { id: 1, name: "Producto 1" },
    { id: 2, name: "Producto 2" },
    { id: 3, name: "Producto 3" },
  ];

  const fakeJuegos = [
    { id: 1, name: "Super Mario 64", año: 1996 },
    { id: 2, name: "The Legend of Zelda: Ocarina of Time", año: 1998 },
    { id: 3, name: "Final Fantasy VII", año: 1997 },
    { id: 4, name: "Metal Gear Solid", año: 1998 },
    { id: 5, name: "Half-Life", año: 1998 },
  ];

  const fakePeliculas = [
    {
      id: 1,
      titulo: "El Padrino",
      director: "Francis Ford Coppola",
      año: 1972,
    },
    {
      id: 2,
      titulo: "El Caballero Oscuro",
      director: "Christopher Nolan",
      año: 2008,
    },
    { id: 3, titulo: "Pulp Fiction", director: "Quentin Tarantino", año: 1994 },
  ];

  // const [message, setMessage] = useState("");

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  // const [counterProducts, setCounterProducts] = useState(0);

  const [juegos, setJuegos] = useState([]);
  const [loadingJuegos, setLoadingJuegos] = useState(true);

  const [peliculas, setPeliculas] = useState([]);
  const [loadingPeliculas, setLoadingPeliculas] = useState(true);

  // const [coches, setCoches] = useState([]);

  useEffect(() => {
    console.log("El componente ya se renderizó");
  }, []);

  useEffect(() => {
    console.log("userEffect []", products);
    setTimeout(() => {
      setProducts(fakeProducts);
      setLoadingProducts(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("Estado de [products]", products);
    document.title = `Productos: ${products.length}`;
  }, [products]);

  // useEffect(() => {
  //   console.log("useEffect [products]", products);
  //   if (products.length > 0) {
  //     console.log("Ya tenemos productos");
  //   }
  //   setCounterProducts(products.length);

  //   // if (!loadingProducts) {
  //   //   if (products.length == 0) {
  //   //     setMessage("No hay productos");
  //   //   } else {
  //   //     setMessage(`Hay ${products.length} productos`);
  //   //   }
  //   // }

  //   if (!loadingProducts && products.length == 0) {
  //     setMessage("No hay productos");
  //   } else if (!loadingProducts && products.length > 0) {
  //     setMessage(`Hay ${products.length} productos`);
  //   }
  // }, [products]);

  useEffect(() => {
    setTimeout(() => {
      setJuegos(fakeJuegos);
      setLoadingJuegos(false);
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPeliculas(fakePeliculas);
      setLoadingPeliculas(false);
    }, 2000);
  }, []);

  const addProduct = () => {
    const newProduct = { id: Date.now(), name: "Producto 4" };
    console.log(newProduct);

    setProducts([...products, newProduct]);

    // products.push(newProduct);
    console.log(products);
  };

  return (
    <>
      <h1>Clase 05</h1>

      <section>
        <h2>Productos</h2>

        {loadingProducts && <p>Cargando productos...</p>}

        {!loadingProducts && products.length == 0 && <p>No hay productos</p>}
        {/* {message && <p>{message}...</p>} */}

        <button onClick={() => setProducts([])}>Vaciar productos</button>

        <button onClick={addProduct}>Agregar Producto</button>

        {products.map((product) => (
          <p key={`product-${product.id}`}>{product.name}</p>
        ))}

        {!loadingProducts && products.length > 0 && (
          <p>Total: Hay {products.length} productos</p>
        )}
        {/* <p>Total: {counterProducts}</p> */}
      </section>

      <section>
        <h2>Juegos</h2>

        {loadingJuegos && <p>Cargando juegos...</p>}

        {!loadingJuegos && juegos.length == 0 && <p>No hay juegos</p>}

        <button
          onClick={() => {
            setJuegos([]);
          }}
        >
          Vaciar juegos
        </button>

        {juegos.map((juego) => (
          <p key={`juegos-${juego.id}`}>{juego.name}</p>
        ))}

        {!loadingJuegos && juegos.length > 0 && (
          <p>Total: Hay {juegos.length} juegos.</p>
        )}
      </section>

      <section>
        <h2>Películas</h2>

        {loadingPeliculas && <p>Cargando películas...</p>}

        <button onClick={() => setPeliculas([])}>Vaciar Peliculas</button>

        <button onClick={() => setPeliculas(fakePeliculas)}>
          Agregar Peliculas
        </button>

        {peliculas.map((pelicula) => (
          <div key={pelicula.id}>
            <h3>{pelicula.titulo}</h3>
            <p>Director: {pelicula.director}</p>
            <p>Año: {pelicula.año}</p>
          </div>
        ))}

        <p>Total: {peliculas.length}</p>
      </section>
    </>
  );
}

export default App;
