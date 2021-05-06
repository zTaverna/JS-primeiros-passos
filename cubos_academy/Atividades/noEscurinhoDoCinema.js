function solucao(obj) {   
    if (!obj.temIngresso || (obj.idade < obj.censura && !obj.estaComPais)) {
        console.log("ACESSO NEGADO")
        return false
    }

    if (obj.temCarteirinha || obj.idade < 18) {
        console.log("MEIA")
        return false
    }

    console.log("INTEIRA")

    // if (obj.temIngresso === true){
    //     if (obj.idade >= obj.censura || obj.estaComPais === true){
    //         if (obj.temCarteirinha === true || obj.idade < 18) {
    //             console.log("MEIA")
    //         } else {
    //             console.log("INTEIRA")
    //         }
    //     } else {
    //         console.log("ACESSO NEGADO")
    //     }
    //     return false
    // }
    // console.log("ACESSO NEGADO")

}