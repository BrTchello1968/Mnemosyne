console.log("Hello Word!");
var idade = 22;
console.log(idade);

let nome = "Marcello";

console.log(nome);

const cargo = "Analista de sistemas";
console.log(cargo);

/* Exercicio 3 */
const nome_ = "Marcello";
let idade_ = 56;

let mensagem = `Meu nome é ${nome_}, tenho ${idade_} anos`;
console.log(mensagem)

console.log(typeof nome_) ;
console.log(typeof idade_) ;


let maiorIdade = true;
let temFilhos = false;

console.log(typeof maiorIdade) ;
console.log(typeof temFilhos) ;
let tamanho

console.log(tamanho) 
console.log(typeof tamanho) ;

let vazio = null;
console.log (vazio) 
console.log(typeof vazio) ;

/* Exercicio 3 tipos primitivos*/
let a = 10;
let b = "Marcello";
let c = "10";
let d = 20;

console.log("a + b = ",a + b);
console.log("a + c = ",a + c);
console.log("a + d = ",a + d);

let N1 = "42.5123";
N1 = Number(N1);
console.log(N1);

let N2 = Number(b);
console.log(N2);


console.log(parseInt(N1));
console.log(parseFloat(N1));



const idade2 = 20;
if (idade2 < 18) {
    console.log("Manor de idade");
}
else if(idade2 > 18){
    console.log("Maior de idade");
}
else if(idade2 === 18){
    console.log("Acabou de atingir a maioridade!")
}