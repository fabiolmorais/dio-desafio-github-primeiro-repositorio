const pesoEmKg = 40;
const alturaEmCm = 1.74;

const IMC = pesoEmKg / alturaEmCm ** 2;

if (IMC < 18.5) {
  console.log(`IMC = ${IMC.toFixed(2)}, resultado: Abaixo do Peso`);
} else if (IMC >= 18.5 && IMC <= 25) {
  console.log(`IMC = ${IMC.toFixed(2)}, resultado: Peso normal`);
} else if (IMC >= 25 && IMC <= 30) {
  console.log(`IMC = ${IMC.toFixed(2)}, resultado: Acima do Peso`);
} else if (IMC >= 30 && IMC <= 40) {
  console.log(`IMC = ${IMC.toFixed(2)}, resultado: Obeso`);
} else {
  console.log(`IMC = ${IMC.toFixed(2)}, resultado: Obesidade Grave`);
}
