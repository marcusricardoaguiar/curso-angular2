var minhaVar = 'Minha Variável';
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 es6-features.org
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 2015
// Babel - transforma typeScript para javaScript.
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'adsfasdf';
