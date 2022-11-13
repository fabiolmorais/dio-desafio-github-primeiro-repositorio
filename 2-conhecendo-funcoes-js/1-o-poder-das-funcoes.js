function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return `IMC = ${imc.toFixed(2)}, resultado: Abaixo do Peso`;
  } else if (imc >= 18.5 && imc <= 25) {
    return `IMC = ${imc.toFixed(2)}, resultado: Peso normal`;
  } else if (imc >= 25 && imc <= 30) {
    return `IMC = ${imc.toFixed(2)}, resultado: Acima do Peso`;
  } else if (imc >= 30 && imc <= 40) {
    return `IMC = ${imc.toFixed(2)}, resultado: Obeso`;
  } else {
    return `IMC = ${imc.toFixed(2)}, resultado: Obesidade Grave`;
  }
}

function main() {
  const peso = 75;
  const altura = 1.75;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
}

main();
