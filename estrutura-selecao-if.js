/*const valido = true;

if (valido) {
    let idade = 27;
    console.log(`expressão válida idade: ${idade}`);
}else{
    let idade = "invalida";
    console.log(`expressão invalida idade ${idade}`);
}
*/

const marca = process.argv[2];

if (marca === 'ford') {
    console.log('Marca atendida');
}else if(marca === 'volks'){
    console.log(`${marca} selecionada`);
}else{
    console.log(`a marca ${marca} não atende.`);
}