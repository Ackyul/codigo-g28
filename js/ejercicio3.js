const nota = Number(prompt("Ingresa tu nota 0 - 100:"))

if (nota >= 90 && nota < 100) {
    console.log("Excelente");
} else if (nota >= 80 && nota < 90) {
    console.log("Muy Bueno");
} else if (nota >= 70 && nota < 80) {
    console.log("Bueno");
} else if (nota >= 60 && nota < 70) {
    console.log("Aprobado");
} else if (nota >= 0 && nota < 60) {
    console.log("Reprobado");
} else {
    console.log("Nota inválida");
}