// const pessoa = {
//   nome: "Fabio",
//   idade: 21,
// };

// const { nome, idade } = pessoa;

// console.log(nome, idade);

const frutas = ["uva", "banana", "pera"];

const [a, ...b] = frutas;
console.log(a, ...b);

const funcionario = [
  { nome: "fabio", idade: 21, salario: 1700 },
  { nome: "pedro", idade: 21, salario: 1700 },
  { nome: "julio", idade: 21, salario: 1700 },
  { nome: "amanda", idade: 21, salario: 1700 },
];

// funcionario.forEach((i) => {
//   const { nome, idade, salario } = i;
//   console.log(nome, idade, salario);
// });

// testando em função
function frutasDes([a, b]) {
  console.log(a, b);
}

// aqui ja estamos recebendo os dados desestruturados nos paramentros
// ao passar o array ao chamar a função os paramentrosja iram pegar os dados desestruturados

function objsDes() {
  funcionario.forEach((i) => {
    const { nome, idade, salario } = i;
    console.log(nome, idade, salario);
  });
}

objsDes()

const pessoa = { nome: "Fabio", idade: 21 };

function pessoaDes({ nome, idade }) {
  console.log(nome, idade);
}

pessoaDes(pessoa);

function funcionarioTeste([a, ...b]) {}

funcionarioTeste(funcionario);
