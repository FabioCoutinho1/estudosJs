const fruits = ["uva", "banada", "pera"];
const pessoa = {nome: "fabio", idade: 20}
const pessoas = [
  { nome: "João", idade: 28, salario: 2500.0 },
  { nome: "Maria", idade: 34, salario: 3200.5 },
  { nome: "Pedro", idade: 40, salario: 4100.75 },
  { nome: "Ana", idade: 25, salario: 2800.0 },
  { nome: "Lucas", idade: 30, salario: 3500.0 },
];
const fruitsMais = [
  "Maçã",
  "Banana",
  "Laranja",
  "Manga",
  "Uva",
  "Abacaxi",
  "Morango",
  "Melancia",
  "Pera",
  "Kiwi",
  "Acerola",
  "Cereja",
  "Amora",
  "Pêssego",
  "Maracujá",
  "Abacate",
  "Goiaba",
  "Tangerina",
  "Figo",
  "Caju",
];

const [, u, b] = fruits;
const { nome, idade } = pessoa;

console.log(u, b);

function mostrarFrutas([a, ...rest]) {
  console.log(a, ...rest);
}

mostrarFrutas(fruitsMais);

function mostrarPessoas({ person, idade }) {
  console.log(person, idade);
}

mostrarPessoas(pessoa);

function mostrarPessoas() {
  pessoas.forEach((idex) => {
    const { nome, idade, salario } = idex;
    console.log(nome, idade, salario);
  });
}
mostrarPessoas();
