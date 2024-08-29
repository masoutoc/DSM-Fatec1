i = 0
soma=0
while(i<5){
    entrada = prompt("Entre com um número: ")
    entrada = parseInt(entrada)
    soma=soma+entrada
    //console.log(i, entrada)
    i=i+1
}
console.log("somatorio: ", soma)