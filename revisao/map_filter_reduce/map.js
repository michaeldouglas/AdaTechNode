const numeros = [1, 2, 3, 4, 5];

// console.log(typeof numeros);
// console.log(numeros);

const numerosDobrados = numeros.map((numero) => [numero * 2])
  .map(resultado => console.log(resultado[0]));


const numerosDobrados2 = numeros.map((numero) => numero * 2);

const API = (numerosDobrados2) => {//EXPRESS
  const getNumerosDobrados = (values) => {//ROUTER GET
    return { valores: values };
  }

  const testeString = ({ resultado }) => {
    console.log(resultado);
  }

  const resultado = getNumerosDobrados(numerosDobrados2);
  return { resultado, testeString };
}

const exibir = API(numerosDobrados2);
exibir.testeString(exibir);