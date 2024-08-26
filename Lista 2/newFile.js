menu = prompt("Entre com o nome da fruta: ");
if (menu == laranja) {
    console.log("R$3,50");
}
else {
    if (menu == limão) {
        console.log("R$3,00");
    }
    else {
        if (menu == acerola) {
            console.log("R$3,50");
        }
        else {
            console.log("Não temos esse suco");
        }
    }
}
