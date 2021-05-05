//função 1
const darBoasVindas = (nomeAluno) => {
    console.log(`Seja bem vindo ${nomeAluno}!`);
}

//variaveis
const novosAlunos = ["Douglas", "Daniel", "Jean"];

//for of
for(const aluno of novosAlunos) {
    darBoasVindas(aluno);
}
