//funçoes
const lavarCarro = (numCarro) => {
    console.log(`Lavando o carro ${numCarro}`);
}

const verificarSeTemCarroNaFila = () => {
    numeroCarro++
    return (
        numeroCarro < 10
        );
    }

    
//Variaveis   
let numeroCarro = 1;
let temCarroNaFila = true;

//while
while(temCarroNaFila){
    lavarCarro(numeroCarro);
    temCarroNaFila = verificarSeTemCarroNaFila();
}






/*let numero = 0;

while(numero < 20) {
    console.log(numero);
    numero++;
}*/