/*
Los bucles while son ideales cuando tienes que hacer un bucle pero no sabes con antelación cuántas veces tendrás que ejecutarlo. 
Se puede combinar un bucle while con una variable de conteo para realizar la misma clase de trabajo que hace un bucle for.
Siempre que la condición dé como resultado true, el bucle seguirá ejecutándose. Tan pronto como el resultado sea false, se detendrá.
*/
entender = true;
while(entender){
	console.log("¡Estoy aprendiendo sobre los bucles 'while'!");
	entender = false;
}

count=0;
var bucle = function(count){
	while(count<3){
		//¡Tu código va aquí!
		console.log("¡Estoy en un bucle!");
		count++;
	}
};
bucle(count);

condicion=true;
var soloCiclo = function(condicion){  
  while(condicion){
    console.log("¡Un ciclo!");  
    condicion=false;
  }  
};
soloCiclo(condicion);