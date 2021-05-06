const pessoa = {
    nome: "José",
    idade: 13,
    altura: 1.39,
    temPassaporte: false
};

// idade mínima = 12
// altura mínima = 1.40

if (pessoa.idade > 12 && pessoa.altura > 1.40) {
    console.log(`${pessoa.nome} pode brincar.`);
} else {
    console.log(`${pessoa.nome} não pode brincar.`)
}

// && E
// || OU
// ! NEGAÇÃO

if (!pessoa.temPassaporte) {
    console.log("Não pode viajar");
}