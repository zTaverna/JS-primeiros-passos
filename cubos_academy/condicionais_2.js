const pessoa = {
    nome: "José",
    idade: 65,
    ehMaiorDeIdade: true,
    altura: 1.73
};

if (pessoa.idade < 18) {
    console.log("A pessoa é menor de idade");
} else if (pessoa.idade < 60) {
    console.log("A pessoa é adulta");
} else {
    console.log("A pessoa é idosa");
}