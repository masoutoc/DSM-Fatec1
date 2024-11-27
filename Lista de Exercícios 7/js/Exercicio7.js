function exerc7(){
    const lista = document.querySelector("#listaPessoa");

    const nomePessoa = document.querySelector("#entrada").value;

    const listaPessoa = document.createElement("li");
    listaPessoa.textContent = `${nomePessoa}`;

    const atributoTitle = document.createAttribute("title");
    atributoTitle.value = document.querySelector("#entrada").value;
    listaPessoa.setAttributeNode(atributoTitle);

    lista.appendChild(listaPessoa);

    document.querySelector("#formulario").reset();
}