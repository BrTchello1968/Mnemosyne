

// 1.Contagem de 1 a 10:
function exercicioRep(){
    //let num = prompt("Digite um Numero:");
    for (let i = 1; i <= 10; i++) {
        console.log(`Contagem: ${i}`);
    }

    let divLogs = document.querySelector(".logs");
    let paragrafo = document.createElement("p");
    paragrafo.innerHTML = "Exercicio 01 de repetição executado";
    divLogs.appendChild(paragrafo);
}

// let contador = 1;
//let num = prompt("Digite um Numero:");
// while (contador <=num){
//     console.log("Contagem: ",contador)
//     contador++;
// }

// 2.Tabuada de um número:
function exercicioTabuada(){
    let num = prompt("Digite um Numero:");
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        result = num*i
        console.log(`${num} * ${i} = ${result}`);
    }
}

// 3.Soma dos primeiros N números naturais:
function exercicioNumerosNaturais(){
    let num = prompt("Digite um Numero:");
    for (let i = 1; i <= num; i++) {
        result += i;
        console.log(`Somatório: ${result}`);
    };
}

// 1.Exibir os números pares de 1 a 50:
function exercicioNumerosPares(){
   for (let i = 1; i <= 50; i++) {     
     if ( i % 2 == 0){
       console.log(`Numero par: ${i}`);
         }
     }
}

// 2.Jogo de adivinhação:
function exercicioAdivinhacao(){
let valor = (Math.floor(Math.random()*100));
let num1 = 0;

window.alert(valor);
do {
    num1 = parseFloat(prompt("Digite um Numero:"));

    if (num1>0 && num1 <=100){
        if (valor==num1 ){
            window.alert("Parabens !, você acertou");    
        } else if  (valor<num1 ){
            window.alert("O numero digitado é maior, tente novamente");    
        } else if  (valor>num1 ){
            window.alert("O numero digitado é menor, tente novamente");
        }
    } else{
        window.alert("Digite um numero entre 1 e 100!");
    }
 } while (valor!=num1);
}

// 3.Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um while.
function exercicioContagemRegressiva(){
    let num = prompt("Digite um Numero:");
    while (num>=0){
    console.log(`Contagem regressiva: ${num}`);
    num--;
    }
}


// let num = prompt("Digite um Numero:");
// let contador  = 0;
// let somatorio = 0;
// let digito=0;

// while (contador < parseInt(num.length)){

//     digito = num.substring(1,contador);
//     console.log(digito);
//     console.log(contador);

//     contador++;
// }