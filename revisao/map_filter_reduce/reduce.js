const numeros = [1, 2, 3, 4, 5, 30, 2, 2, 321, 321, 222, 23333, 444];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma);