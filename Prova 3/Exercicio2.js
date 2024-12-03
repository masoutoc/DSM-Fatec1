function envioForm(){

    const nomePessoa = document.querySelector("#nome").value;

    const idadePessoa = parseInt(document.querySelector("#idade").value, 10);

    const emailPessoa = document.querySelector("#email").value;

    const bairroPessoa = document.querySelector("#bairro").value;

    let categoria;
    if (idadePessoa <= 18) {
        categoria = "JUNIOR";
    } else if (idadePessoa <= 25) {
        categoria = "EXPERT";
    } else {
        categoria = "MASTER";
    }

    // Determinar o local com base no bairro
    let local;
        if (bairroPessoa === "jardim das oliveiras" || bairroPessoa === "vila romana") {
            local = "ZONA SUL";

    } else if (bairroPessoa === "jardim do portal" || bairroPessoa === "jardim panorama") {
        local = "ZONA OESTE";
    }

    const tabela = document.querySelector("#infoPessoa tbody");
    const info = document.createElement("tr");

    info.innerHTML = `
    <td>${nomePessoa}</td>
    <td>${idadePessoa}</td>
    <td>${categoria}</td>
    <td>${local}</td>
`;
    
    tabela.appendChild(info);

    // limpar os campos do formulario
    document.querySelector("#cadastroForm").reset();
}