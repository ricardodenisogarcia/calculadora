var auxi = require("./auxi");
var operaciones = require("./operaciones");

var operacionAEvaluar = process.argv[2];
var objetoOperacion = auxi.evaluarOperacionMoD(operacionAEvaluar); 
console.log(objetoOperacion); //para ver si funciona bien la parte aux

var parteA = auxi.evaluarOperacionA(objetoOperacion.parteA);
console.log(parteA); //para ver si funciona bien la parte aux
var parteB = auxi.evaluarOperacionB(objetoOperacion.parteB);
console.log(parteB);//para ver si funciona bien la parte aux


var parteC = operaciones.ejecutarOperacionMoD(objetoOperacion.operacionAB); 
var parteC = parseInt(parteC);
console.log(parteC);//para ver si funciona bien

var parteD = operaciones.ejecutarOperacionAC(parteA);
var parteD = parseInt(parteD); //para ver si funciona bien

var resultadoFinal = operaciones.ejecutarOperacionDB(parteB);
var resultadoFinal = parseInt(resultadoFinal);

console.log(resultadoFinal);
