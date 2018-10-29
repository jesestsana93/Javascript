//En la línea 2 declara una variable que se llame miNombre y cuyo valor sea tu nombre.
miNombre= "Jesus Esteban";
//En la línea 4, usa console.log para mostrar la variable miNombre.
console.log(miNombre);
//En la línea 7, modifica el valor de miNombre para que sean solamente las 2 primeras
//letras de tu nombre.
miNombre = miNombre.substring(0,2);
//En la línea 9, usa console.log para mostrar la variable miNombre.
console.log(miNombre);

//Las variables definidas fuera de una función son accesibles en cualquier parte una vez 
//que han sido declaradas. Son llamadas variables globales y su ámbito es global.
var globalVar = "hola";

var foo = function() {
    console.log(globalVar);  // prints "hola"
}

//Las variables definidas dentrode una función son variables locales. No se puede acceder
//a ellas fuera de la función.