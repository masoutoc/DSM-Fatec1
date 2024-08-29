i = 0;
maior = 0; //começa com o número 0 pois ele será menor que qualquer número inserido pelo usúario

while (i < 5) {
  entrada = prompt("Entre com um número: ");
  entrada = parseInt(entrada);

  if (entrada > maior) {
    maior = entrada;
  }
  i = i + 1;
}
console.log("maior: ", maior);
