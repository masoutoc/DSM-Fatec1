numeros = [8, 3, 4, 7, 5]
soma = 0
i = 0
while (i < numeros.length){ //enquanto i (que começa com 0) for menor que 5 será true
    soma = soma + numeros[i]
    i = i + 1
}
console.log("Somatoria:", soma)