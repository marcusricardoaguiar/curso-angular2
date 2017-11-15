var minhaVar = 'Minha Variável';

function minhaFunc(x, y){
    return x + y;
}

// ES 6 es6-features.org
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor*2;
});
numeros.map(valor => valor*2);  // ES 2015

// Babel - transforma typeScript para javaScript.

class Matematica {
    soma(x, y){
        return x + y;
    }
}


var n1: string = 'adsfasdf';
