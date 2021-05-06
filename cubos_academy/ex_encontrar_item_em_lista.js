//loops - outro tipo de for + break
const listaDeCompras = ["Arroz", "Batata", "Maça", "Pêra"];

for (let item of listaDeCompras) {
    console.log("Verificando item: " + item);
    if (item === "Batata") {
        console.log("Batata está na lista");
        break;
    };
};