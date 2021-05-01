//Func. numero randomico.
function numeroAleatorio() {
    console.log(Math.random());
}

numeroAleatorio();

//Func. Ola Mundo!

const intro = () => {
    console.log("Hello World!");
}

intro();

//Fun. Soma

const soma = (num1,num2) => {
    return num1 + num2;
}

console.log(soma(2,4));
console.log(soma(10,10));

//Func. Subtração

function sub(num1, num2) {
    return num1 - num2;
}

console.log(sub(9,3));
console.log(sub(50,30));

//Fun. multiplicação

function mult(num1,num2) {
    return num1 * num2;
}

const primeiraMultiplicacao = mult(10,10);
const segundaMultiplicacao = mult(5,5);

console.log({primeiraMultiplicacao});
console.log({segundaMultiplicacao});
