// --------------- PRÁTICA GUIADA ---------------

let bimestre1 = [8, 7, 8, 9]
let bimestre2 = [8, 7, 8, 9]
let bimestre3 = [8, 7, 8, 9]
let bimestre4 = [8, 7, 8, 9]

let notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// soma = 0
// for (i = 0; i < bimestre1.length; i++) {
//     soma += bimestre1[i]

// } console.log(soma)


// for (i = 0; i < notasDoAno.length; i++) {
//   console.log(`--- ${i + 1} --- Bimestre ----`)
//   soma = 0
//   for (j = 0; j < notasDoAno[i].length; j++) {
//     // console.log(`Notas: ${notasDoAno[i][j]}`)
//     soma += notasDoAno[i][j]              
    
//   }
//   console.log(`A Soma das notas do bimestre é: ${soma}`)
//   console.log(`A Média das notas do bimestre é: ${soma / notasDoAno[i].length}`)
//   console.log('------------------------------')
// }

// usando o for in (indice) e for of (valor)
// for (let i in notasDoAno) {
//   console.log(`--- ${i + 1} --- Bimestre ----`)
//   soma = 0
//   for (let valor in notasDoAno[i]) {
//     // console.log(`Notas: ${notasDoAno[i][j]}`)
//     soma += notasDoAno[i][valor]              
    
//   }
//   console.log(`A Soma das notas do bimestre é: ${soma}`)
//   console.log(`A Média das notas do bimestre é: ${soma / notasDoAno[i].length}`)
//   console.log('------------------------------')
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
console.log('------ FILMES ------ ')
for (i = 0; i < filmes.length; i++) {
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
  for (j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Ator/Atriz: ${filmes[i].elenco[j]}`)
  }
}

// usando for in e for of
console.log(`---Filmes---`)
for (let i in filmes) {
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`)
  for (let valor of filmes[i].elenco) {
    console.log(`Ator/Atriz: ${valor}`)
  }
}
