menor = 8 //prompt ("Entre com um número inteiro: ")
maior = 11 //prompt ("Entre com um número inteiro maior que o digitado anteriormente: ")
menor = parseInt (menor)
maior = parseInt(maior)
soma=0
if (maior < menor){
    aux = menor
    menor = maior
    maior = aux
}
while(menor <= maior){
    soma=soma+menor
    console.log("somatorio:", soma)
    menor = menor + 1
}

//com a linha "console.log("somatorio:", soma)" dentro do while o sistema mostra ao usuario as somatorias, caso a linha fique fora do while o sistema mostra APENAS o resultado final.