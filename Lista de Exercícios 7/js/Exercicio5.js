function exerc5(){
    const inputValor = document.querySelector("#entrada").value; // inputValor é global
    const novoParagrafo = document.createElement("p");
    const texto = document.createTextNode(inputValor);
    novoParagrafo.appendChild(texto);

    const divSaida = document.querySelector("#saida");
    divSaida.appendChild(novoParagrafo);
}