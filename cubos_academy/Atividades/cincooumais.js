function solucao(precos) {

    let menorpreco = precos[0]
    let total = 0

    for (let preco of precos) {
        
        total = preco + total

        if (preco < menorpreco) {
            menorpreco = preco
        }
    }

    if (precos.length >= 5) {
        total = total - menorpreco
    }
    
    console.log(total)
    
}

solucao([100, 500, 100, 200, 50])