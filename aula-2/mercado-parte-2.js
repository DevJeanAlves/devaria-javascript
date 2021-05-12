/*Desafio:
1 -> Escreva um programa que receba alguns produtos como argumentos.         [O.K]
2 -> Validar se estes produtos estão na lista de disponíveis do mercado.    []
3 -> Caso eesteja, avisar o usuário quais produtos tem ee quais não tem.     []
4 -> Exibir a lista de produtos disponíveis ordenadas por ordeeem alfabética []
   do mercado para que o usuário possa pedir da proxima vez.
*/

const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosMercado = [
    "feijão",
    "arroz",
    "melancia",
    "suco",
    "alface"
];

const validarLista = (listaMercado) => {
    // verifica se a lista esta vazia "", ou esta false, se esta null, se esta undefined
    if (!listaMercado) {
        throw Error("A lista não pode ser vazia!");
    }
    
    const itensDesejados = listaMercado.split(",");
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;

    if (itensInvalidos > 0) {
        throw Error(`Existem ${itensInvalidos} itens inválidos`);
    }

    return itensDesejados;
}

const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for (const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();

        if (produtosMercado.includes(itemFormatado)) {
            produtosDisponiveis.push(itemFormatado);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    }

    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
}

leitor
    .question(
        "Digite a lista de produtos separados por virgula:\n",
        listaProdutos => {
            try {
                const listaValida = validarLista(listaProdutos);
                const disponibilidade = obterDisponibilidade(listaValida);
                
                console.log(
                    'Os seguintes produtos estão disponíveis',
                    disponibilidade.produtosDisponiveis
                );

                console.log(
                    'Os seguintes produtos estão indisponíveis',
                    disponibilidade.produtosIndisponiveis
                );

                const disponiveisOrdenados = disponibilidade
                    .produtosDisponiveis
                    .sort((produto1, produto2) => produto1.localeCompare(produto2));
                
                console.log(
                    'Produtos disponíveis ordenados alfabeticamente',
                    disponiveisOrdenados
                );
            } catch (e) {
                console.log(`Erro ao processar a lista (${e.message})`);
            } finally {
                leitor.close();
            }
        }
    );