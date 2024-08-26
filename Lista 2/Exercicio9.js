x = prompt ("Entre com sua altura: ")
y = prompt ("Entre com seu peso: ")
x = parseFloat (x)
y = parseFloat (y)
imc = y/(x*x)
if (imc <= 18.5){
    console.log("Você está abaixo do peso")
}
else {
    if (imc <= 24.9){
        console.log("Você está no seu peso ideal. Parabéns!")
    }
    else{
        if (imc <= 29.9){
            console.log("Você está levemente acima do peso.")
        }
        else{
            if (imc <= 34.9){
                console.log("Obesidade grau 1")
            }
            else {
                if (imc <= 39.9){
                    console.log("Obesidade grau 2 (severa!)")
                }
                else{
                    console.log("Obesidade 3 (mórbida!!)")
                }
            }
        }
    }
}
