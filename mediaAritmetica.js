let nomeAluno = "renan lucas";

// Passo 1: Crie um array com as respectivas notas
let alunoNotas = [10, 7, 6, 4, 10];

// Passo 2: Some todos os elementos do array utilizando a função reduce
let soma = alunoNotas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

// Passo 3: Divida a soma pelo número de elementos no array
let media = soma / alunoNotas.length;


console.log(`${nomeAluno} ficou com a ${media}`);

// Passo 4: Verifique se a média é maior ou igual a 6
if (media >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado.");
};