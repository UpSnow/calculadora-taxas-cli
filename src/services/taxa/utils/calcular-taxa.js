async function calcularTaxa(valor, percentual) {
  // Converte os valores para números
  const valorNumerico = Number(valor);
  const percentualNumerico = Number(percentual);

  // Verificações de validade
  if (isNaN(valorNumerico) || isNaN(percentualNumerico) || valorNumerico < 0 || percentualNumerico < 0) {
    return "Valor ou percentual inválido";
  }

  // Calcula a taxa
  const taxa = (valorNumerico * percentualNumerico) / 100;

  // Retorna a taxa e o valor final com taxa
  return {
    taxa: taxa.toFixed(2),
    valorComTaxa: (valorNumerico + taxa).toFixed(2)
  };
}

export default calcularTaxa