function inverte (palavra){
    i = 0
    saida = ""
    while (i<palavra.length){
        saida = palavra[i]+saida
        i = i + 1
    }
    return saida;
}

r = inverte ("Pedro")
console.log("Invertido:", saida)

r = inverte ("Mariana")
console.log("Invertido: ", saida) 