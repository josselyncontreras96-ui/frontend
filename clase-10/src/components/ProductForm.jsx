import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const navigate = useNavigate();

  //   const [name, setName] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [stock, setStock] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  //   setForm({name: form.name, price: 100, stock: form.stock})
  // setForm({ ...form, price: 100 });

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(!name, name == "", !price, !stock); // !false - !"", !0, !null, !undefined

    // if (name == "" || price == "" || stock == "") return;
    // if (!name || !price || !stock) return;
    if (!form.name || !form.price || !form.stock) return;

    const newProduct = {
      _id: crypto.randomUUID(),
      name: form.name,
      price: form.price,
      stock: form.price,
    };

    // console.log(newProduct);
    onAddProduct(newProduct);

    // setName("");
    // setPrice("");
    // setStock("");

    setForm({
      name: "",
      price: "",
      stock: "",
    });

    navigate("/");
  };

  return (
    <section>
      <h2>Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            value={form.name}
            // onChange={(event) => setName(event.target.value)}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio: </label>
          <input
            type="number"
            id="price"
            value={form.price}
            min="0"
            // onChange={(event) => setPrice(event.target.value)}
            onChange={(event) =>
              setForm({ ...form, price: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock: </label>
          <input
            type="number"
            id="stock"
            value={form.stock}
            min="0"
            // onChange={(event) => setStock(event.target.value)}
            onChange={(event) =>
              setForm({ ...form, stock: event.target.value })
            }
          ></input>
        </div>

        <div className="form-actions">
          <button type="submit">Guardar producto</button>
        </div>
      </form>

      <p>{form.name}</p>
      <p>{form.price}</p>
      <p>{form.stock}</p>
    </section>
  );
}

export default ProductForm;