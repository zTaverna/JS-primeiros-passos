//Filtrar elementos que comecem com a letra A

const lista = ["Arroz", "Batata", "amora"];

const resultado = [];

for (let item of lista){
    if (item[0] === "A" || item[0] == "a"){
        resultado.push(item);
    };
};

console.log(resultado);

//INCREMENTAR
//
//resultado.push("Mandioca");
//console.log(resultado);
//
//RETIRAR
//
//resultado.pop("Mandioca");
//console.log(resultado);