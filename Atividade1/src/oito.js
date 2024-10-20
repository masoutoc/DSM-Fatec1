let i = 0;
while( i < 6 ){
    nro = Math.random() * 100;
    nro = Math.floor(nro);
    if( (nro%3 == 0 || nro%5 == 0) && nro > 20 ){ //o número sorteado terá que ser multiplo de 3 OU de 5 E ser maior que 20 
        console.log(nro);
        i = i + 1;
    }
}