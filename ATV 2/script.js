

 function AcrescimodeSalario(){
    let salarioInicial = parseFloat(document.getElementById("salarioInicial").value);

    //calcular aumento
    let aumento = (salarioInicial+ (salarioInicial *0.20));
    let INSS = (aumento*0.08)

    let salariofinal = (aumento - (aumento * 0.08))
    

    document.getElementById("salarioPrimario").innerHTML = "O salário inicial é de: " + salarioInicial;
    document.getElementById("salarioAcrescimo").innerHTML = "O salário com acréscimo  é: " +aumento;
    document.getElementById("INSS").innerHTML = "O valor do inss é  é: " +INSS;
    document.getElementById("salarioFinal").innerHTML = "O salário final é de: " + salariofinal;
 }