const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terceiraPergunta = "Digite a operação: \n";

const realizarCalculo = (num1, num2, operador) => {
    const primeiroNumero = parseInt(num1)
    const segundoNumero = parseInt(num2)

    switch(operador) {
        case  '+':
            return primeiroNumero + segundoNumero;
        case '-':
            return primeiroNumero - segundoNumero;
        case '*':
            return primeiroNumero *  segundoNumero;
        case '/':
            return primeiroNumero / segundoNumero;
        default:
            console.log(`${operador} não é um operador válido.`);
    }
}

leitor.question('Digite o primeiro numero: \n', (primeiroNumero) => {
    console.log({primeiroNumero});

    leitor.question('Digite o segundo numero: \n', (segundoNumero) => {
        console.log({segundoNumero});

        leitor.question(terceiraPergunta, (operador) => {
            const resultado = realizarCalculo(primeiroNumero,segundoNumero,operador);
            console.log({resultado});
            leitor.close();
        })
        
    })
});
