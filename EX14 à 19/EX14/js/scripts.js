function Inicio (){
    var resposta = confirm("Clique em 'OK' para inserir números e em 'CANCELAR' para os números pré selecionados")

    if (resposta){
        resultado = SomaComEscolha();
    }
    else{
        resultado= SomaSemEscolha(90,10);
    }
    alert (resultado)
}

function SomaComEscolha(){
    var numero1 = prompt("Informe o primeiro número:");
    var numero2 = prompt("Informe o segundo número:");

    var resultado = parseInt(numero1) + parseInt(numero2);;
    return resultado;
}

function SomaSemEscolha(numero1, numero2){
    var resultado = numero1 + numero2;
    return resultado;
}