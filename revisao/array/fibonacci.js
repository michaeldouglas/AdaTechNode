const fibonacci = (n) => {
  const resultado = [0, 1];
  const teste = [];

  for (let i = 2; i <= n; i++) {
    const a = resultado[i - 1];
    const b = resultado[i - 2];
    resultado.push(a + b);
  }

  teste.push({ resultado })

  return [{ resultado: teste.pop().resultado }, { dataDeGeracao: '2023-08-08' }];
}

const ObterResultado = (recebeOMeuArray, key) =>
  recebeOMeuArray[key].resultado.join(', ')

//
const ObterData = (recebeOMeuArray, key) =>
  recebeOMeuArray[key].dataDeGeracao

const n = 10;
const sequenciaFibonacci = fibonacci(n);
console.log(`Os primeiros ${n} números da sequência de Fibonacci:`)
console.log(ObterResultado(sequenciaFibonacci, 0));

//
console.log(ObterData(sequenciaFibonacci, 1));