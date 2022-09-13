const resultadosMs = [
    [6,10,23,89,12,34],
    [6,10,23,89,12,34],
    [6,10,23,89,12],
]

for(i = 0; i < resultadosMs.length; i++){
    console.log(`Sorteio ${i+1}`);
    for(indice = 0; indice < resultadosMs.length; indice++){
        const sorteio = resultadosMs[i]
        console.log(sorteio[indice])
    }
}

console.log('/////////////////////')

for(i in resultadosMs){
    if(resultadosMs[i].length !== 6){
        console.log(`Número errado de bolinhas sorteadas. ${resultadosMs[i].length} bolinhas, deveria ser 6`)
    }
    console.log(`Sorteio ${i+1}: ${resultadosMs[i]}`)
}

console.log('/////////////////////')

for(resultado of resultadosMs){
    if(resultado.length !== 6){
        console.log(`Número errado de bolinhas sorteadas. ${resultadosMs[i].length} bolinhas, deveria ser 6`)
    }
    console.log(`Sorteio: ${resultado}`)
}