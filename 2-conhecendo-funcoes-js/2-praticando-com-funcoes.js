function escrevaSeuNome(nome) {
  console.log("meu nome é: " + nome);
}

escrevaSeuNome("Fabio");
escrevaSeuNome("Renan");

function consultaMaioridade(idade) {
  return idade >= 18
    ? console.log("É maior de Idade")
    : console.log("Não é maior de Idade");
}

consultaMaioridade(23);
consultaMaioridade(15);

function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
  return valor + (valor * (juros / 100));
}

const valorProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(valorProduto, 10));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(valorProduto, 15));
} else if (formaDePagamento === 3) {
  console.log(`Valor final fica de ${valorProduto.toFixed(2)}`);
} else {
  console.log(aplicarJuros(valorProduto, 10));
}
