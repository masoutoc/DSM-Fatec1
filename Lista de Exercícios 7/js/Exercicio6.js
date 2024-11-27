function exerc6(){
    const inputValor = document.querySelector("#entrada").value; // inputValor é global
    const novoParagrafo = document.createElement("p");
    const texto = document.createTextNode(inputValor);
    novoParagrafo.appendChild(texto);

    const atributoTitle = document.createAttribute("title");
    atributoTitle.value = "Nome fornecido";
    novoParagrafo.setAttributeNode(atributoTitle);

    const divSaida = document.querySelector("#saida");
    divSaida.appendChild(novoParagrafo);
}