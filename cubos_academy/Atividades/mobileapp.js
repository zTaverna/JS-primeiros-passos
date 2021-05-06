function solucao(tempo, distancia) {
    viagem = 0

	if (tempo < 5) {
        viagem = 600
        console.log(viagem)
        return false
    }

    if (tempo >= 5 && tempo <= 60) {
        viagem = 100 * tempo + 50 * distancia
        console.log(viagem)
        return false
    }

    if (distancia < 100) {
        viagem = 200 * distancia
        console.log(viagem)
        return false
    }

    viagem = 150 * distancia 
    console.log(viagem)
}