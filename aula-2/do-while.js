//função 1
const consultarAtividadesdoDia = () => {
    if(atividadesRealizadas === 3) {
        return [];
    }
    return[
       "Atividade 1",
       "Atividade 2",
       "Atividade 3"
    ]
}
//função 2
const informarAtividades = (atividades) => {
    if(atividades.length === 0){
        console.log("você não tem atividades pendentes!");
        return;
    }
    console.log(`Atividades pendentes ${atividades}`);
}



//variaveis
let atividadesPendentes;
let atividadesRealizadas = 0;

//do-while
do {
    atividadesPendentes = consultarAtividadesdoDia();
    informarAtividades(atividadesPendentes);
    atividadesRealizadas++;
}while(atividadesPendentes.length > 0);