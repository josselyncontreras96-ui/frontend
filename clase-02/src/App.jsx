

function App() {
const name = "Josselyn";
const products = ["Mouse", "Laptop"];


  return (
  <> 
    <h1>Hola {name}</h1>;
    <ul>
      {products.map((item) => (
      <li>{item}</li>
 
     ))}
    </ul>
  </>

  ); 
}





export default App
