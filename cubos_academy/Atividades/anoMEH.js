function solucao(ano) {
	
    if (ano % 2 !== 0){
        console.log("MEH")
        return false
    }

    if (ano % 4 !== 0){
        console.log("COPA")
        return false
    }

    console.log("JOGOS")
}

console.log(solucao(2021))
console.log(solucao(2020))
console.log(solucao(2022))