const numero = Number(prompt("Ingrese un número"));

const residuo = numero % 2;

if (residuo === 0) {
  console.log("El número", numero, "es par")
} 
else {
  console.log("El número", numero, "es impar")
}