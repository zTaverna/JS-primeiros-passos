function solucao(produtos) {

    let total = 0
    let totalTop = 0

    for (let produto of produtos) {
        total = produto.preco + total
        if (produto.preco > 10000) {
            totalTop = produto.preco + totalTop
        }
    }

    const percentual = totalTop / total

    console.log({ totalTop, percentual: parseFloat(percentual.toFixed(1))})
    
}

solucao([
    {
        nome: "Camiseta",
        preco: 7000 // em centavos
    },
    {
        nome: "Tenis",
        preco: 8000 // em centavos
    },
    {
        nome: "Relogio",
        preco: 15687 // em centavos
    }
])