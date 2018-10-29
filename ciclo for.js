/*
Cada ciclo for usa una variable de conteo. Acá nuestra variable se llama i (pero puede tener cualquier nombre). La variable desempeña muchas funciones.
La primera parte del ciclo for le dice a la computadora que empiece con un valor de 5 para i. Lo hace declarando la variable llamada i y dándole un valor de 5.

Después pregunta: ¿i es menor que 51? Como i=5, entonces es true y podemos continuar.
En este momento NO incrementamos. En vez de eso, si la condición se cumple, ejecutamos el bloque de código.
Cuando el ciclo for ejecuta el código en el bloque de código - la parte entre { } - lo hace comenzando desde i = 5.
Una vez que el bloque de código está terminado, el ciclo for incrementa o disminuye.

Reglas que hay que aprender

a. Un código más eficiente para incrementar en 1 es i++.
b. Disminuimos en 1 escribiendo i--.
c. Podemos incrementar hasta cualquier valor escribiendo i += x, donde x es en cuánto queremos incrementar. Por ejemplo, i += 3 incrementa el contador de a 3. 
d. Podemos disminuir hasta cualquier valor escribiendo i -= x
*/
for (var i = 5; i < 51; i+=5) {
	console.log(i);
}

for(i=100;i>=0;i-=5){
    console.log(i);
}