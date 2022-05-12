const calcular = document.getElementById('calcular');


function setFocus(){
    document.getElementById('nome').focus();
}

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    
if (nome !== '' && altura !== '' && peso !== '') {
    
    const valorImc = (peso / (altura*altura)).toFixed(1)

    var classificacao = "";

    if (valorImc < 18.5) {
        classificacao = "está abaixo do peso!";
    }else if(valorImc < 25){
        classificacao = "está com peso ideal. Parabéns!";
    }
    else if(valorImc < 30){
        classificacao = "está levemente acima do peso.";
    }else if(valorImc < 35){
        classificacao = "está obesidade grau I";
    }else if(valorImc < 40){
        classificacao = "está com obesidade grau II";
    }else{
        classificacao = "está com obesidade grau III. Cuidado!";
    }


    resultado.textContent = `Olá ${nome} seu IMC é ${valorImc} e você ${classificacao} `

}else{
    resultado.textContent = "Por favor preencha todos os campos!!!";
}



}



calcular.addEventListener('click',imc);




