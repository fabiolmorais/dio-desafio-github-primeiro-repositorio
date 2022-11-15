// class Carro {
//   marca;
//   cor;
//   gastoMedioPorKm;

//   constructor(marca, cor, gastoMedioPorKm) {
//     this.marca = marca;
//     this.cor = cor;
//     this.gastoMedioPorKm = gastoMedioPorKm;
//   }

//   calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
//     return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
//   }
// }

// const uno = new Carro('Fiat', 'Preto', 1/12);
// const palio = new Carro('Fiat', 'Prata', 1/10);

// console.log(uno.calcularGastoDePercurso(70, 5).toFixed(2));
// console.log(palio.calcularGastoDePercurso(70, 5).toFixed(2));


// class Pessoa {
//   nome;
//   peso;
//   altura;

//   constructor(nome, peso, altura) {
//     this.nome = nome;
//     this.peso = peso;
//     this.altura = altura;
//   }

//   calcularImc() {
//     return this.peso / (this.altura ** 2);
//   }

//   classificarImc() {
//     const imc = this.calcularImc();
//     if (imc < 18.5) {
//       return `IMC = ${imc.toFixed(2)}, resultado: Abaixo do Peso`;
//     } else if (imc >= 18.5 && imc <= 25) {
//       return `IMC = ${imc.toFixed(2)}, resultado: Peso normal`;
//     } else if (imc >= 25 && imc <= 30) {
//       return `IMC = ${imc.toFixed(2)}, resultado: Acima do Peso`;
//     } else if (imc >= 30 && imc <= 40) {
//       return `IMC = ${imc.toFixed(2)}, resultado: Obeso`;
//     } else {
//       return `IMC = ${imc.toFixed(2)}, resultado: Obesidade Grave`;
//     }
//   }
// }

// const jose = new Pessoa('José', 70, 1.75);
// console.log(jose.classificarImc());

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
  }
}

new Pessoa("Renan", 30).descrever();