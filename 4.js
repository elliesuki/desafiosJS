// Bloque de constantes
const precioDesayuno = 30
const precioAlmuerzo = 50
const precioCena = 60
const desayunosVendidos = 40
const almuerzosVendidos = 20
const cenasVendidas = 30
const precioTotalDelDia = precioDesayuno + precioAlmuerzo + precioCena
const promedioPrecios = (precioDesayuno + precioAlmuerzo + precioCena) / 3
//Fin del Bloque.

//Bloque de salidas.
console.log("Ejercicio 4:");
console.log("Ingreso por cada tipo de comida:");
console.log("Desayuno");
console.log(precioDesayuno * desayunosVendidos);
console.log("Almuerzo");
console.log(precioAlmuerzo * almuerzosVendidos);
console.log("Cena");
console.log(precioCena * cenasVendidas);
console.log("Monto total del día:");
console.log(precioTotalDelDia);
console.log("Promedio de precios:");
console.log(promedioPrecios);
//Fin del bloque.
