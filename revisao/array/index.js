const array = []; // Array simples
const array2 = new Array(); // Object literal prototype
const array4 = new Array('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo');

// Saber os tipos do que vcs estao utilizando
console.log(typeof array);
console.log(typeof array2);

const array3 = [
  [
    {
      id: 1
    },
    {
      id: 2
    }
  ],

  [
    {
      id: 1,
      frete: [{ frete: 5 }, { frete: 6 }]
    },
    {
      id: 2
    }
  ]
]; // JSON
//console.log(array3[1][0]['frete'][0].frete);


// i = 0
// ? 
// i + 1
// i = 1
console.log(array4);
for (let i = 0; i < array4.length; i++) {
  console.log(array4[i] + "\n");
}