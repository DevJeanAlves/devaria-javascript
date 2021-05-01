const nome = process.argv[2];
const listaConvidado = ['Jean','Jade','Joao'];

switch(nome) {
    case 'Jean':
        console.log(`O nome selcionado foi ${nome}`);
        break;
    case 'Jade':
        console.log(`O nome selecionado foi ${nome}`);
        break;
    case 'Joao':
        console.log(`O nome selecionado foi ${nome}`);
        break
    default:
        console.log(`Desculpe ${nome}, mas seu nome não consta na lista`);
}

if (listaConvidado.includes(nome)) {
    console.log(`Welcome, ${nome}.`);
}else{
    console.log(`I'm sorry ${nome}.`);
}