menor = 15//prompt ("Entre com um número inteiro: ")
maior = 10//prompt ("Entre com um número inteiro maior que o digitado anteriormente: ")
menor = parseInt (menor)
maior = parseInt(maior)
if (maior < menor){
    aux = menor
    menor = maior
    maior = aux
}
while(menor <= maior){
    console.log(menor)
    menor = menor + 1
}