function cadastroAnimais(){
    // const formulario = document.querySelector("#CadAnimais").value;
    const lista = document.querySelector("#listaAnimais");

    const nomeAnimal = document.querySelector("#nome").value;

    const ordemAnimal = document.querySelector("#ordem").value;

    const classeAnimal = document.querySelector("#classe").value;

    const listaAnimal = document.createElement("li");
    listaAnimal.textContent = `Nome: ${nomeAnimal}, Ordem: ${ordemAnimal}, Classe: ${classeAnimal}`;

    // const texto = document.createTextNode(nome, ordem, classe);
    // texto = document.createTextNode(nomeAnimal);
    // animal.appendChild(texto);
    
    lista.appendChild(listaAnimal);

    // Limpar os campos do formulário
    document.querySelector("#CadAnimais").reset();
}