senha = "abc";
entrada = "dfg"; //valor aleatorio diferente da senha
i = 0
while (i<3) {
  entrada = prompt("Entre com a senha: ");
  if (entrada == senha) {
    console.log("Acesso liberado");
  } else {
    console.log("Senha incorreta");
  }
  i=i+1
}
console.log("Excedeu o número de tentativas")

//variavel while neste caso serve para perguntar a senha, ja a if para comparar o valor que foi inserido com o valor real da senha
