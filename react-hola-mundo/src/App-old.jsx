// Vamos a importar el componente Header
import { useState } from "react";
import Header from './components/Header';
import Title from './components/Title';
import Button from './components/Button'; 

/**
 * Como crear un componente desde 0
 */

// El nombre de la funcion solo va en mayuscula cuando es 
// un componente, sé que es un componente porque tiene
// la extension jsx y es una interface
function App() {
  // count: Variable
  // setCount: la funcion que me permite cambiar el valor de count
  const [count, setCount] = useState(100);
  // retorna un bloque de HTML

  function handleAddCount() {
    setCount(count + 1);
  }
  return (
    <section className="m-5">
      <Header />
      <div>
        <Title text="Hola mundo" size="h1" />
        <Title text="Me llamo Linder" size="h6" />
        <Title text="Me llamo Linder" size="h5" />
        <Title text="Me llamo Linder" size="h4" />
        <Title text="Me llamo Linder" size="h3" />
        <Title text="Me llamo Linder" size="h2" />
        <div className="flex gap-10 flex-col">
          <Button type="button" variant="primary" text="Boton primario" />
          <Button type="submit" variant="danger" text="Boton de peligro" />
          <Button type="reset" variant="warning" text="Boton de advertencia" />
          <Button variant="info" text="Boton informativo" />
          <Button text="Prueba" variant="danger" type="submit" />
        </div>
      </div>
    </section>
  ) 
}

export default App;
