senha = "abc";
entrada = "dfg"; //valor aleatorio diferente da senha

while (entrada != senha) {
  entrada = prompt("Entre com a senha: ");
  if (entrada == senha) {
    console.log("Acesso liberado");
  } else {
    console.log("Senha incorreta");
  }
}

//variavel while neste caso serve para perguntar a senha, ja a if para comparar o valor que foi inserido com o valor real da senha
