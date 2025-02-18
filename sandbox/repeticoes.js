

let num = prompt("Digite um Numero:");
let result = 0;

// 1.Contagem de 1 a 10:
// for (let i = 1; i <= num; i++) {
//     console.log(`Contagem: ${i}`);
//   }


// let contador = 1;
// while (contador <=num){
//     console.log("Contagem: ",contador)
//     contador++;
// }


// 2.Tabuada de um número:
// let num = prompt("Digite um Numero:");
// let result = 0;
// for (let i = 1; i <= 10; i++) {
//     result = num*i
//      console.log(`${num} * ${i} = ${result}`);
//   }

// 3.Soma dos primeiros N números naturais:
//  for (let i = 1; i <= num; i++) {
//      result += i;
//      console.log(`Somatório: ${result}`);
//    };

// 1.Exibir os números pares de 1 a 50:
//   for (let i = 1; i <= 50; i++) {
     
//     if ( i % 2 == 0){
//       console.log(`Numero par: ${i}`);
//         }
//     }

let valor = 35;
let num1 = 0;
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
  

