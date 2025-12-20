// Buscar elementos del HTML en JS

// document.getElementById("id")
// buena practica, es guardar la busqueda en una variable
const tituloPrincipal = document.getElementById("titulo-principal");

console.log(tituloPrincipal);
// textContent: Es la propiedad que nos permite modificar el texto
tituloPrincipal.textContent = "Codigo G28";
// modificar estilos
// JS tiene la capacidad de modificar estilos, pero NO es recomendable
// usarlo porque para cambiar los estilos una mucho procesamiento
// tituloPrincipal.style.color = "#f01";
// si quisieramos modificar un estilo, lo recomendable es crear en CSS
// una clase y agregarle esa clase desde JS

// classList.add: sirve para agregar una clase a una etiqueta
// classList.remove: sirve para eliminar una clase a una etiqueta
tituloPrincipal.classList.add("css-titulo-principal");

// document.querySelector: busca 1 element
// document.querySelectorAll: busca todas las coincidencias

// nombre de etiqueta
const parrafo = document.querySelector("p");
parrafo.addEventListener("click", function () {
  alert("Click en cualquier elemento");
});

const parrafos = document.querySelectorAll("p");
console.log(parrafo);
console.log(parrafos);

const btnOne = document.querySelector(".btn-one");
console.log(btnOne);

// como podemos capturar el click de un boton y hacer una accion
/**
 * addEventListener
 * parametro1: evento "click"
 * parametro2: function (la funcion no tiene nombre - funcion anonima)
 */
btnOne.addEventListener("click", function () {
  const segundoParrafo = document.querySelector("#segundo-parrafo");
  segundoParrafo.textContent = "Este es un parrafo, que se modifico desde JS";
});

// DATOS EXTRA MUY IMPORTANTE
// TODOS los elementos tienen el atributo click

const contenedor = document.querySelector("#contenedor");

contenedor.innerHTML = `
<h2 id="titulo-2">Titulo de JS</h2>
<img width="200" src="https://yt3.googleusercontent.com/MqAUGsICRxKJmJAYlrqUnqKLGlQ5hzaiBJKbaqLSLIcGYh9fwf6kcU4i3BgmWG5o-y7W9j1Bx3Q=s900-c-k-c0x00ffffff-no-rj" />
<div>
  <p>Hola mundo</p>
</div>
`;
// es posible manipular las etiquetas creadas usando el innetHTML
// const titulo2 = document.querySelector("#titulo-2");
// titulo2.classList.add("css-titulo-principal");