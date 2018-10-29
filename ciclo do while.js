/*
A veces se quiere estar seguro de que el bucle se ejecuta al menos una vez, sin importar nada. Si este es el caso, lo que 
se busca es un bucle while modificado, llamado un bucle do/while
*/
condicionCiclo = false;
do {
	console.log("¡Voy a dejar de hacer ciclos porque mi condición es " + String(condicionCiclo) + "!");	
} while (condicionCiclo === true); 

condicion=true;
var alHelicoptero = function(condicion){
  //¡Escribí acá tu ciclo do/while!
  do {
	console.log("Voy a dejar de hacer bucles porque mi condición es " + String(condicion) + "!");	
  } while (condicion);
};