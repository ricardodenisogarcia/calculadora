function ejecutarOperacionMoD(objetoOperacion){
    if(objetoOperacion == "*") {
        return multiplicar(); 
    }else if (objetoOperacion == "/"){
        return dividir();
    }
}

function ejecutarOperacionAC(parteA) {
    if(parteA.operacionA == "+") {
        return sumarAC(parteA, parteC); 
    }else if (parteA.operacionA == "-"){
        return restarAC(parteA, parteC);
    }
}

function ejecutarOperacionDB(parteB) {
    if(parteB.operacionB == "+") {
        var parteD = parteD;
        return sumarDB(parteD, parteB); 
    }else if (parteB.operacionB == "-"){
        var parteD = parteD;
        return restarDB(parteD, parteB);
    }
}

function multiplicar(){
    return  parteA.numerosA[1] * parteB.numerosB[0];
}

function dividir(){
    return parteA.numerosA[1] / parteB.numerosB[0];
}

function sumarAC (parteA, parteC){
var resultadoAC = parteA.numerosA[0] + parteC;
var resultadoAC = parseInt(resultadoAC);
return resultadoAC;
}

function restarAC (parteA, parteC){
    var resultadoAC = parteA.numerosA[0] - parteC;
var resultadoAC = parseInt(resultadoAC);
return resultadoAC;
}

function sumarDB (parteD, parteB){
var resultadoDB = parteD + parteB.numerosB[1];
var resultadoDB = parseInt(resultadoDB);
return resultadoDB;
}

function restarDB (parteD, parteB){
var resultadoDB = parteD - parteB.numerosB[1];
var resultadoDB = parseInt(resultadoDB);
return resultadoDB;
}

module.exports = {
    ejecutarOperacionMoD,
    ejecutarOperacionAC, 
    ejecutarOperacionDB
};
