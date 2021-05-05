const listaConvidado = ['Jean', 'Jade', 'Joao', 'Nubia', 'Roberto'];

nome = process.argv[2];
idade = parseInt(process.argv[3]);

if (!listaConvidado.includes(nome)){
    console.log(`Desculpe, ${nome},\n mas você não esta na lista`);
    return;
}

if (idade < 18) {
    console.log(`Desculpe ${nome}, você tem apenas ${idade} anos e esta é  uma festa para maiores de idade`);
    return;
}

if (listaConvidado.includes(nome) && idade >= 18) {
    console.log(`Seja bem vindo(a),${nome}, estavamos esperando por você!`);
}