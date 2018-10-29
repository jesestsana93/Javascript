//Así es como luce una función
var dividirPorTres = function (number) {
    var val = number / 3;
    console.log(val);
};
//Debes poner un punto y coma al final de cada línea de código (dentro de las { }) y
// después de la función completa (después de los { }).
//En la línea 12, llamamos a la función por su nombre
//Ahora la llamamos desde 'dividirportres'
//Le decimos al computador cuál es el número de entrada (es decir, 6)
//Entonces el computador usa el código dentro de la función
dividirPorTres(24);

//las funciones pueden ir con dos parametros:
//var perimetroCaja = function(largo,ancho){
//  return largo + largo + ancho + ancho;
//};
//perimetroCaja(4,2);

var demandaDeAlimentos = function (comida) {
    console.log("Quiero comer" + " " + comida);    
};
demandaDeAlimentos("tacos");//llamada de la funcion

var saludo = function (nombre) {
    console.log(nombre);
};
saludo("Brenda");//llamada de la funcion