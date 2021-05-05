const readLine = require('readLine');

const leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosDisponiveis = [
    "Feijão",
    "Arroz"
];

const validarLista = (listaMercado) => {
    if(!listaMercado) { // verifica  se a lista esta vazia ou estaa false ou null ou undefined.
        throw Error("A lista não pode ser vazia!");
    }
}

leitor.question("Digite a lista de produtos separados por virgula:\n",
    listaProdutos => {
        validarLista(listaProdutos);
        leitor.close();
    }
);

