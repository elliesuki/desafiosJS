// Bloque de constantes
const costoVehiculo = 2000
const cuotaInicial = costoVehiculo*0.3
const diferencia = costoVehiculo-cuotaInicial
const cuotaMensual = diferencia/24
const nombreCliente = "Alonso"
//Fin del bloque.

//Bloque de salidas
console.log("Ejercicio nº3");
console.log("Nombre del cliente:");
console.log(nombreCliente);
console.log("Costo del vehículo($):");
console.log(costoVehiculo);
console.log("Cuota inicial($):");
console.log(cuotaInicial);
console.log("Cuotas mensuales para un plazo de dos años ($):");
console.log(cuotaMensual.toFixed(2));
//Fin del bloque.
