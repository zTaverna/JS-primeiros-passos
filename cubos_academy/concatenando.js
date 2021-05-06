const pessoa = {
    nome: "José",
    idade: 89,
    ehMaiorDeIdade: true,
    altura: 1.73
};

if (pessoa.idade < 18) {
    console.log(pessoa.nome + " é menor de idade");
} else if (pessoa.idade < 60) {
    console.log(`${pessoa.nome} é adulto`);
} else {
    console.log(`${pessoa.nome} é um idoso de ${pessoa.idade} anos.`);
}