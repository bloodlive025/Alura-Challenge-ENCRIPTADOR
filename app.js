
function encriptar() {
    var  texto = document.getElementById('textoAEncriptar').value;
    var salida="";
    for(let i=0;i<texto.length;i++){
        if(texto.charAt(i) == "a"){
            salida = salida + "ai";
        }
        else if(texto.charAt(i) == "e"){
            salida = salida + "enter";
        }
        else if(texto.charAt(i) == "i"){
            salida = salida + "imes";
        }
        else if(texto.charAt(i) == "o"){
            salida = salida + "ober";
        }
        else if(texto.charAt(i) == "u"){
            salida = salida + "ufat";
        }
        else {
            salida = salida + texto.charAt(i);
        }
    }
    localStorage.setItem('textoEncriptado',salida);
    localStorage.setItem('texto',texto);
    window.location.href = "prueba.html";
    
}


function desencriptar(){
    var  texto = document.getElementById('textoAEncriptar').value;
    var salida="";
    for(let posicion = 0; posicion < texto.length; posicion++){
        if(texto.charAt(posicion) == "a" && texto.charAt(posicion + 1) == "i"){
            salida = salida + "a";
            posicion = posicion + 1;
        }
        else if(texto.charAt(posicion) == "e" && texto.charAt(posicion + 1) == "n" && texto.charAt(posicion + 2) == "t" && texto.charAt(posicion + 3) == "e" && texto.charAt(posicion + 4) == "r"){
            salida = salida + "e";
            posicion = posicion + 4;
        }
        else if(texto.charAt(posicion) == "i" && texto.charAt(posicion + 1) == "m" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "s"){
            salida = salida + "i";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "o" && texto.charAt(posicion + 1) == "b" && texto.charAt(posicion + 2) == "e" && texto.charAt(posicion + 3) == "r"){
            salida = salida + "o";
            posicion = posicion + 3;
        }
        else if(texto.charAt(posicion) == "u" && texto.charAt(posicion + 1) == "f" && texto.charAt(posicion + 2) == "a" && texto.charAt(posicion + 3) == "t"){
            salida = salida + "u";
            posicion = posicion + 3;
        }
        else {
            salida = salida + texto.charAt(posicion);
        }
    }
    localStorage.setItem('texto',texto);
    localStorage.setItem('textoEncriptado',salida);
    window.location.href = "prueba.html";
    
}

function copiarTexto(){
    var texto =document.getElementById('textoAEvaluar');
    texto.select();
    texto.setSelectionRange(0,9999);
    document.execCommand("copy");
    alert("Texto copiado: "+texto.value);
    window.location.href ="index.html";
}



var salida = localStorage.getItem('textoEncriptado');
var texto = localStorage.getItem('texto');
document.getElementById('textoAEvaluar').value = salida;
document.getElementById('textoAEncriptar').value= texto;
document.getElementById('textoADesencriptar').value= texto;