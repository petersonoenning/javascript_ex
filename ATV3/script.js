const alunos = [];

function calcularMedia() {
    const matriculaElement = document.getElementById("matricula");
    const nota1Element = document.getElementById("nota1");
    const nota2Element = document.getElementById("nota2");
    const nota3Element = document.getElementById("nota3");
    const resultadoElement = document.getElementById("resultado");

    const matricula = matriculaElement.value;
    const nota1 = parseFloat(nota1Element.value);
    const nota2 = parseFloat(nota2Element.value);
    const nota3 = parseFloat(nota3Element.value);

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = "";
    if (media >= 7.0) {
        situacao = "Aprovado";
    } else if (media >= 4.0) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    const aluno = {
        matricula: matricula,
        nota1: nota1,
        nota2: nota2,
        nota3: nota3,
        media: media,
        situacao: situacao
    };

    alunos.push(aluno);

    // Adiciona o novo resultado ao conteúdo existente
    resultadoElement.innerHTML += `Matrícula: ${matricula}<br>Média: ${media.toFixed(2)}<br>Situação: ${situacao}<br><hr>`;

    matriculaElement.value = "";
    nota1Element.value = "";
    nota2Element.value = "";
    nota3Element.value = "";
    mostrarMediaGeral();
   
}
   
function mostrarMediaGeral() {
    const mediaGeral = alunos.reduce((total, aluno) => total + aluno.media, 0) / alunos.length;
    console.log(`Média Geral dos Alunos: ${mediaGeral.toFixed(2)}`);

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML += `<br>Média Geral: ${mediaGeral.toFixed(2)}<br><hr>`;
}
