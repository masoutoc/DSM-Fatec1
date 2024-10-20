obj = {
    nome: "Pedro",
    idade: 22,
    endereco: {
        logradouro: "Av. São João, 100",
        cidade: "São José dos Campos"
    }
}

const {endereco: {cidade}} = obj;
console.log("Cidade:", cidade)