// --------------- PRÁTICA GUIADA ---------------
// const bimestre1 = [10, 10, 10, 10] // soma = 40; média = 10
// const bimestre2 = [8, 5, 7.5, 3]
// const bimestre3 = [6, 7, 8.5, 10]
// const bimestre4 = [3, 5, 2, 0]


// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// construindo laço para percorrer cada bimestre do array
// for (let i = 0; i < notasDoAno.length; i++) {
//   const bimestreDaVez = notasDoAno[i] // guarda a lista de notas de cada bimestre


//   let soma = 0
//   let media = 0

//   // construindo laço para percorrer cada nota do bimestre
//   for(let j = 0; j < bimestreDaVez.length; j++) {
//     // caso não existisse a variável bimestre for(let j = 0; j < notasDoAno[i].length; j++)
//     // console.log(bimestre[j])
//     const notas = bimestreDaVez[j]
//     soma = soma + notas
//   }
//   media = soma / bimestreDaVez.length
//   console.log(`A soma das notas do bimestre ${[i + 1]} é ${soma} \nA média das notas do 1º bimestre é ${media}`)
// }

// for in => variável guarda o ÍNDICE
// for of => varíavel guarda o ELEMENTO


// for (let indice in notasDoAno) {
//     // console.log(index)
//   // console.log(typeof index)
//   indice = Number(indice)

//   let soma = 0
//   let media = 0

//   for (let elemento of notasDoAno[indice]) {
//     soma = soma + elemento
//   }
//   media = soma / notasDoAno[indice].length

//   console.log(`A soma das notas do bimestre ${indice + 1} é ${soma} \nA média das notas do bimestre ${indice + 1} é ${media}`)
// }


// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
/*
"O Homem que copiava, de 2003, dirigido por Jorge Furtado
"Ator/Atriz 1: Lázaro Ramos"
"Ator/Atriz 2: Leandra Leal"
"Ator/Atriz 3: Pedro Cardoso"
*/

// for (let i = 0; i < filmes.length; i++) {
  // const filme = filmes[i]
  // const elenco = filme.elenco 
//   // console.log(filme.elenco)
  
  // const frase = `${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor}.`
  
//   console.log(frase)

//   for(let j = 0; j < elenco.length; j++){
//     // console.log(elenco[j])
    // const fraseElenco = `Atriz/Ator: ${j + 1}: ${elenco[j]}`

//     console.log(fraseElenco)
//   }
// }

// for in
for (let indice in filmes) {
  const filme = filmes[indice]
  const titulo = filme.titulo
  const ano = filme.ano
  const diretor = filme.diretor
  const elenco = filme.elenco  
  // console.log(filme)

  const frase = `${titulo}, de ${ano}, dirigido por ${diretor}`
  console.log(frase)

  for (let artista of elenco) {
    // console.log(artista)
    const indiceArtista = elenco.indexOf(artista)
    // console.log(indiceArtista, artista)
    
    const fraseElenco = `Atriz/Ator: ${indiceArtista + 1}: ${artista}`
    
    console.log(fraseElenco)      
  }

}