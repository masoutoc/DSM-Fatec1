function exerc8(){
        const lista = document.querySelector("#listaPessoa");

        const nomePessoa = document.querySelector("#entrada").value;

    if (nomePessoa.length > 0){
        const listaPessoa = document.createElement("li");
        listaPessoa.textContent = nomePessoa;

        const atributoTitle = document.createAttribute("title");
        atributoTitle.value = document.querySelector("#entrada").value;
        listaPessoa.setAttributeNode(atributoTitle);

        lista.appendChild(listaPessoa);

        document.querySelector("#formulario").reset();

    } else {
        alert("O campo de entrada está vazio. Por favor, insira um nome.");
    }
}