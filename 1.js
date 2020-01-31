/* Una agencia de carros paga a su personal de ventas un salario base 
de 500.000 Bs. más una comisión de 200.000 Bs. por cada automóvil vendido, 
más el 10% del valor total de las ventas. Si se tiene como entrada el nombre del vendedor,
el número de autos vendidos y el valor total de sus ventas. 
Se pide calcular e imprimir el salario neto del vendedor */

// Bloque de constantes.

const salarioBase = 500000;
const autosVendidos = 5;
const comision = 200000 * autosVendidos;
const valorTotalVentas = 15000000;
const salarioNeto = salarioBase + comision + (valorTotalVentas * 0.10);
const nombreVendedor = "Alonso";

// Fin de las constantes.

//Bloque de salidas

console.log("Ejercicio 1");
console.log("Nombre del vendedor: ");
console.log(nombreVendedor);
console.log("Número de autos vendidos: ");
console.log(autosVendidos);
console.log("Valor total de ventas: ");
console.log(valorTotalVentas);
console.log("Salario base:");
console.log(salarioBase);
console.log("Comision total:");
console.log(comision);
console.log("Salario neto:");
console.log(salarioNeto);
console.log("Fin del ejercicio 1");

//Fin de salidas





