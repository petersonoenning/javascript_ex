function calcularValorArrecadado() {
    const quantidadePequenas = parseInt(document.getElementById("quantidadePequenas").value, 10) || 0;
    const quantidadeMedias = parseInt(document.getElementById("quantidadeMedias").value, 10) || 0;
    const quantidadeGrandes = parseInt(document.getElementById("quantidadeGrandes").value, 10) || 0;

    const precoPequenas = 10;
    const precoMedias = 12;
    const precoGrandes = 15;

    const valorArrecadado = (quantidadePequenas * precoPequenas) + (quantidadeMedias * precoMedias) + (quantidadeGrandes * precoGrandes);

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Valor arrecadado: R$ ${valorArrecadado.toFixed(2)}`;
}
