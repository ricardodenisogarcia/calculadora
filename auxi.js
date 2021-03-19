function evaluarOperacionMoD(textoAEvaluar) {
    var posicionDelSimboloAB = textoAEvaluar.indexOf("*");
    if (posicionDelSimboloAB < 0) {
        posicionDelSimboloAB = textoAEvaluar.indexOf("/");  
    }
    var parteA = textoAEvaluar.slice(0, posicionDelSimboloAB);
    var parteB = textoAEvaluar.slice(posicionDelSimboloAB + 1);
    var simboloAB = textoAEvaluar[posicionDelSimboloAB];
    return {
        parteA,
        parteB, 
        operacionAB: simboloAB,
    };
}

function evaluarOperacionA(parteA) {
    var posicionDelSimbolo = parteA.indexOf("+");
    if (posicionDelSimbolo < 0) {
        posicionDelSimbolo = parteA.indexOf("-");
    }
    var parteAA = parteA.slice(0, posicionDelSimbolo);
    var parteAB = parteA.slice(posicionDelSimbolo + 1);
    var simboloA = parteA [posicionDelSimbolo];

    parteAA = parseInt(parteAA);
    parteAB = parseInt(parteAB);

    return {
        numerosA: [parteAA, parteAB],
        operacionA: simboloA,
    };
}

function evaluarOperacionB(parteB) {
    var posicionDelSimbolo = parteB.indexOf("+");
    if (posicionDelSimbolo < 0) {
        posicionDelSimbolo = parteB.indexOf("-");
    }
    var parteBA = parteB.slice(0, posicionDelSimbolo);
    var parteBB = parteB.slice(posicionDelSimbolo + 1);
    var simboloB = parteB [posicionDelSimbolo];

    parteBA = parseInt(parteBA);
    parteBB = parseInt(parteBB);

    return {
        numerosB: [parteBA, parteBB],
        operacionB: simboloB,
    };
}

module.exports = {
    evaluarOperacionMoD, evaluarOperacionA, evaluarOperacionB
};