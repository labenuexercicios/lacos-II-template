// // --------------- PRÁTICA GUIADA ---------------
// const bimestre1 = [9, 8, 7,6]
// const bimestre2 = [5, 6,7, 8]
// const bimestre3 = [4, 6, 8, 10]
// const bimestre4 = [3, 5, 7, 9]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// // console.table(notasDoAno)

// // for(let i = 0; i < notasDoAno.length;i++){
// //   let soma = 0
// //   for(let j = 0; j <notasDoAno[i].length; j++){
// //     soma = soma + notasDoAno[i][j]

// //   }
// //   let mediaBimestre = soma / notasDoAno[i].length

// //   console.log(`A soma da média do bimestre ${i+1} foi ${soma} \ne a média do bimestre ${i+1} foi ${mediaBimestre}`)
// // }

// // const bimestres = [[9, 8, 7, 6], [5, 6, 7, 8], [4, 6, 8, 10], [3, 5, 7, 9]]

// // for (let i = 0; i < bimestres.length; i++) {
// //   let soma = 0;
// //   for (let j = 0; j < bimestres[i].length; j++) {
// //     soma = bimestres[i][j] + soma
// //   }
// //   console.log(`Soma do bimestre ${i + 1} foi ${soma}`)
// // }
// for(let indiceBimestre in notasDoAno){
//   console.log(`Índice no array é ${indiceBimestre}`)
//   let soma = 0

//   for(let nota of notasDoAno[indiceBimestre]){
//     soma = soma + nota
//   }

//   let mediaBimestre = soma / notasDoAno[indiceBimestre].length

//   console.log(`A soma da média do bimestre ${Number(indiceBimestre)+1} foi ${soma} \ne a média do bimestre ${Number(indiceBimestre)+1} foi ${mediaBimestre}`)
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


// for (let i = 0; i < filmes.length; i++) {
//   console.log(`\n\nTítulo do filme: ${filmes[i].titulo} \nAno: ${filmes[i].ano}\nDireção: ${filmes[i].diretor}\n`);
//   for (let j = 0; j < filmes[i].elenco.length; j++) {

//     console.log(`\nAtor/atriz: ${filmes[i].elenco[j]}`);

//   }

// }

// escreva seu código abaixo 👇🏻

for (let i in filmes) {
  console.log(`\n\nTítulo do filme: ${filmes[i].titulo} \nAno: ${filmes[i].ano}\nDireção: ${filmes[i].diretor}\n`);
  for (let atriz of filmes[i].elenco) {

    console.log(`\nAtor/atriz: ${atriz}`);

  }

}
