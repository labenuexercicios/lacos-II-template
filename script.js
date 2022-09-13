const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

// escreva seu código abaixo 👇🏻

const resultadoMega = [
  [1, 5, 8, 9, 13],
  [1, 22, 16, 36, 23, 58],
  [1, 9, 12, 17, 27, 46],
  [1, 2, 10, 26, 11, 48],
];



// for (let i = 0; i < resultadoMega.length; i++) {
//   console.log(resultadoMega[i].length);
//   if (resultadoMega[i].length != 6) {
//     alert(
//       `numero errado de bolinhas sorteadas, foram sorteadas ${resultadoMega[i].length}`
//     );
//   }
// }
// console.log("******************************");

// for (i in resultadoMega) {
//   console.log(`Sorteio ${Number(i) + 1}`);
//   }
// }

var array = [];
array[2] = 'c';
array[1] = 'b';
array[0] = 'a';
array[7] = '7'

for (var p of array) {
  console.log(p)
}
console.log("*****")
for (var p in array) {
  console.log(array[p])
}