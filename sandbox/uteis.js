// const numeros = [1,2,3,4,5,6];

// const numerosMaiorQueDois =  numeros.filter(numero => numero > 2);

// console.log(numerosMaiorQueDois);


// const numeros2 = [5,7,3,11,18,8,14,9];

// const numerosMaiorDez =  numeros2.filter(numero => numero > 10);

// console.log(numerosMaiorDez);


// const nomes = ["Ana", "João", "Laura", "Marcello", "Luciana", "Beatriz"];
// const nomesComA = nomes.filter(nome => nome[2] == 'a');
// console.log(nomesComA);

// const produtos = [
//     { id: 1, nome: "Teclado", preco: 100 },
//     { id: 2, nome: "Mouse", preco: 50 },
//     { id: 3, nome: "Monitor", preco: 700 },
//     { id: 4, nome: "CPU", preco: 1000 },
//     { id: 5, nome: "Impressora", preco: 500 },
//   ];


//   const pessoas = [
//     { nome: "Claudio", idade: 16},
//     { nome: "Eduarda", idade: 11 },
//     { nome: "Izabella", idade: 28 },
//     { nome: "Fernanda", idade: 30 }
//   ];

//   const maiorde18 =  pessoas.filter(pessoa => pessoa.idade>=18);
//   console.log(maiorde18);


//   const maiorPreco = produtos.filter(lista => lista.preco>500);
//   console.log(maiorPreco);


// const numerosDobrados=numeros.map(result => result*3);
// console.log(numerosDobrados);


// const resultado = numeros.reduce((acumulador,numero) => acumulador + numero,0);
// console.log(resultado);

// const numeros3 = [10,13,7,18,25,16];
// const maiorNumero = numeros3.reduce((max,numero) => {
//     if (max > numero){
//         return max;
//     } else {
//         return numero;
//     }
// },numeros3[0]);

// console.log(maiorNumero);


// const palavras = ["carro", "moto", "montanha", "caminhao", "cachoeira", "computador","armario"];
// const palavrasLongas = palavras.filter(palavra => palavra.length > 5);
// console.log(palavrasLongas);


const nomes = ["Ana", "João", "Laura", "Marcello", "Luciana", "Beatriz"];
const nomeExato = nomes.filter(nome => nome== 'Laura');
console.log(nomeExato)


const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  const produtoBuscado = produtos.filter(produto => produto.nome=="Fone de ouvido")
  console.log(produtoBuscado); // Deve retornar { nome: "Fone de ouvido", preco: 80 }
  

  const usuarios = [
    { nome: "Carlos", ativo: false },
    { nome: "Ana", ativo: true },
    { nome: "Beatriz", ativo: false},
    { nome: "João", ativo: false }
  ];
  const usuarioAtivo = usuarios.filter(usuario => usuario.ativo==true);
  console.log(usuarioAtivo); // Deve retornar { nome: "Ana", ativo: true }


  const pedidos = [
    { id: 1, status: "pendente" },
    { id: 2, status: "entregue" },
    { id: 3, status: "cancelado" },
    { id: 4, status: "cancelado" }
  ];
  const pedidoEntregue =pedidos.filter(pedido => pedido.status =="entregue");
  console.log(pedidoEntregue); // Deve retornar { id: 2, status: "entregue" }
  

  const alunos = [
    { nome: "Miguel", nota: 5 },
    { nome: "Paula", nota: 8 },
    { nome: "Camila", nota: 9 },
    { nome: "Lucas", nota: 6 }
  ];
  const alunoAprovado = alunos.filter(aluno => aluno.nota == 8);
  console.log(alunoAprovado); // Deve retornar { nome: "Paula", nota: 8 }