function somatorio(lista){
    soma = 0
    i = 0
    while (i<lista.length){
        soma = soma + lista[i]
        i = i + 1
    }
    return soma  
}

numeros = [8,3,4,7,5]
s = somatorio (numeros)
console.log("Somatório: ", s)

numeros = [5,4,3]
s = somatorio (numeros)
console.log("Somatório: ", s)