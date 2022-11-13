const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = "Etanol";
const kmPorLitros = 10;
const distanciaKm = 100;
let custoDaViagem;

if (tipoCombustivel === "Etanol") {
  custoDaViagem = (distanciaKm / kmPorLitros) * precoEtanol;
  console.log(custoDaViagem);
} else {
  custoDaViagem = (distanciaKm / kmPorLitros) * precoGasolina;
  console.log(custoDaViagem);
}
