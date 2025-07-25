import calcularTaxa from "./utils/calcular-taxa.js";

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação:", err.message);
    return;
  }

  const { valor, percentual } = result;

  const resultado = await calcularTaxa(valor, percentual);

  if (typeof resultado === "string") {
    console.log("❌ " + resultado); // Erro tratado em calcularTaxa
  } else {
    console.log(`🧮 Taxa: R$ ${resultado.taxa}`);
    console.log(`💰 Valor com taxa: R$ ${resultado.valorComTaxa}`);
  }
}
 
export default handle