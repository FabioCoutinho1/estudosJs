const prompt = require("prompt-sync")();
const arrDeContatos = [];

const criarContatos = (nome, numero, dd) => {
  const contato = { nome, numero, dd};
  arrDeContatos.push(contato);
};

const mostrarListaDeContatos = (arr) => {
  arr.forEach((i, j) =>
    console.log(`${j + 1} Nome: ${i.nome}, Numero: ${i.numero}, DD: ${i.dd}`)
  );
};

while (true) {
  console.log("vamos começar\n");
  console.log("(1) adicionar contato \n");
  console.log("(2) mostrar contatos salvos\n");
  console.log("(3) apagar contato \n");
  console.log("(4) sair");

  const opcao = prompt();

  if (opcao === "1") {
    const nome = prompt(console.log("Nome:"));
    const numero = prompt(console.log("Numero:"));
    const dd = prompt(console.log("DD:"));

    criarContatos(nome, numero, dd);
  }

  if (opcao === "2") {
    mostrarListaDeContatos(arrDeContatos);
  }

  if (opcao === "3") {
    mostrarListaDeContatos(arrDeContatos);
    const numeroDaLista = parseInt(
      prompt(console.log("Selecione o numero do contato que dejesa apagar:"))
    );
    arrDeContatos.splice(numeroDaLista - 1, 1);
    mostrarListaDeContatos(arrDeContatos);
  }
  if (opcao === "4") {
    break;
  }
}
