/*
Son variables que pueden almacenar números o strings. 
Arreglos:

a. almacenan listas de datos
b. pueden almacenar diferentes tipos de datos al mismo tiempo
c. están ordenados de forma que la posición de cada dato es fija

Sintaxis:
var nombreArreglo = [datos, datos, datos];
*/
var mixto = [34, "dulces", "azul", 11];

/*
Posiciones de los arreglos:
La posición de los elementos en un arreglo es fija. Así que solamente
necesitamos el nombre del arreglo (en este caso es datosChatarra), y la posición de los datos que queremos, y listo.
Nota:La posición (o el índice) de cada dato comienza a contarse desde 0, no desde 1.
*/
var datosChatarra = ["Eddie Murphy", 49, "maníes", 31];
console.log(datosChatarra[3]);

/*
¿qué pasaría si el arreglo tuviera 100 elementos?En los arreglos, una manera útil de acceder sistemáticamente a cada elemento es usando un ciclo for.
Este arreglo tiene 5 elementos.Luego se comienza con el ciclo for que se ejecuta hasta que i<ciudades.length (i<5 ya que tiene 5 elementos)
El ciclo recorre e imprime todos los elementos del arreglo hasta terminar
*/
var ciudades = ["Misiones", "Salta", "Mendoza", "Buenos Aires","River plate"];
for (var i = 0; i < ciudades.length; i++) {
    console.log("Me gustaría visitar" + " " + ciudades[i]);
}


//Bucle que encuentra el mayor elemento en un arreglo y luego registra ese elemento en la consola
var arreglo = [3 , 6, 2, 56, 32, 5, 89, 32];
var mayor = 0;

for(i=0;i<arreglo.length;i++){
    if(mayor<arreglo[i]){
        mayor=arreglo[i];
    }
}
console.log(mayor);