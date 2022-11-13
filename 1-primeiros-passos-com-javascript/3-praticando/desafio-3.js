const valorProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  console.log(
    `Valor final fica de ${(valorProduto - valorProduto * 0.1).toFixed(2)}`
  );
} else if (formaDePagamento === 2) {
  console.log(
    `Valor final fica de ${(valorProduto - valorProduto * 0.15).toFixed(2)}`
  );
} else if (formaDePagamento === 3) {
  console.log(
    `Valor final fica de ${(valorProduto).toFixed(2)}`
  );
} else {
  console.log(
    `Valor final fica de ${(valorProduto + valorProduto * 0.1).toFixed(2)}`
  );
}
