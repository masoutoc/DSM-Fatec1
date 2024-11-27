function exerc4(){
    entrada = document.querySelector("#entrada").value;

    p = document.createElement("p");

    texto = document.createTextNode(entrada);
    
    document.body.appendChild(texto);

    saida = document.querySelector("#saida").value;

    saida.appendChild(p)

}

// function exerc4(){

//     // 1. Pegar o valor do input com id "entrada"
//     const inputValor = document.getElementById("entrada").value;

//     // 2. Criar um elemento <p>
//     const novoParagrafo = document.createElement("p");

//     // 3. Criar um nó de texto com o valor do input
//     const texto = document.createTextNode(inputValor);

//     // 4. Adicionar o texto ao elemento <p>
//     novoParagrafo.appendChild(texto);

//     // 5. Selecionar a <div> com id "saida"
//     const divSaida = document.getElementById("saida");

//     // 6. Adicionar o elemento <p> dentro da <div> "saida"
//     divSaida.appendChild(novoParagrafo);
// }