var usuarioEscoge = prompt("¿Piedra, papel o tijeras?");
var computadorEscoge = Math.random();
if (computadorEscoge <0.34){
	computadorEscoge = "piedra";
}else if(computadorEscoge <=0.67){
	computadorEscoge = "papel";
}else{
	computadorEscoge = "tijeras";
}
var comparar = function(eleccion1,eleccion2){
    if(eleccion1 == eleccion2){
       return "¡Es un empate!";   
    }
    if (eleccion1 == piedra){        
        if (eleccion2 == tijeras){
            return "piedra gana";
        }else{
            return "papel gana";
        }
    }
    if (eleccion1 == papel){        
        if (eleccion2 == piedra){
            return "papel gana";
        }else{
            return "tijeras gana";
        }
    }
    if (eleccion1 == tijeras){        
        if (eleccion2 == piedra){
            return "piedra gana";
        }else{
            return "tijeras gana";
        }
    }
};
comparar = (usuarioEscoge, computadorEscoge);
console.log(comparar);