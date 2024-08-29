i = 0
menor = 1000 //ou usar "Infinity" para sempre ser um valor muito mais alto que o de entrada do usuario

while(i<5){
    entrada = prompt("Entre com um número: ")
    entrada = parseInt(entrada)
    
    if(entrada<menor){
        menor = entrada
    }
    i=i+1
}
console.log("menor: ", menor)
