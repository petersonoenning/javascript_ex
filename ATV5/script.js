function calcularDivisao() {
    const valorTotal = parseFloat(document.getElementById("valorTotal").value) || 0;

    
    const quantidadeAmigos = 3;

     //Math.floor p/ arredondar
    const valorCarlosAndre = Math.floor(valorTotal / quantidadeAmigos);

    const valorFelipe = valorTotal - (valorCarlosAndre * 2);

    
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Carlos: R$ ${valorCarlosAndre.toFixed(2)}<br>André: R$ ${valorCarlosAndre.toFixed(2)}<br>Felipe: R$ ${valorFelipe.toFixed(2)}`;
}
