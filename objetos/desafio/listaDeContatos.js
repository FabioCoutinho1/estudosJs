const prompt = require("prompt-sync")();
const arrDeContatos = [];

const criarContatos = (nome, numero, dd) => {
  const contato = { nome, numero, dd };
  arrDeContatos.push(contato);
};

const mostrarListaDeContatos = (mensagem, arr) => {
  console.log(mensagem);
  arr.forEach((i, j) => {
    const { nome, numero, dd } = i;
    console.log(`${j + 1} Nome: ${nome}, Numero: ${numero}, DD: ${dd}`);
  });
};

const validarEntradas = (numList, mensagem) => {
  if (numList > 0 && numList <= arrDeContatos.length) {
    arrDeContatos.splice(numList - 1, 1);
  } else {
    console.log(mensagem);
  }
};

const validarEntradaContatos = (nome, numero, dd) => {
  if (nome === "" || numero === "" || dd === "") {
    console.log("O campo nao pode estar vazio");
  } else {
    criarContatos(nome, numero, dd);
  }
};

while (true) {
  console.log("(1) adicionar contato \n");
  console.log("(2) mostrar contatos salvos\n");
  console.log("(3) apagar contato \n");
  console.log("(4) sair");

  const key = prompt();

  switch (key) {
    case "1":
      const nome = prompt("Nome:");
      const numero = prompt("Numero:");
      const dd = prompt("DD:");

      validarEntradaContatos(nome, numero, dd);

      break;

    case "2":
      if (arrDeContatos.length === 0) {
        mostrarListaDeContatos(
          "Não a nenhum contado adicionadao",
          arrDeContatos
        );
      } else {
        mostrarListaDeContatos("Aqui esta sua lista", arrDeContatos);
      }
      break;

    case "3":
      mostrarListaDeContatos("", arrDeContatos);
      const numeroDaLista = parseInt(
        prompt(console.log("Selecione o numero do contato que dejesa apagar:"))
      );
      validarEntradas(numeroDaLista, "Opção Invalida, tente novamente");

      break;

    case "4":
      const desejaSair = prompt("Deseja realmente sair (s/n)");
      if (desejaSair.toLowerCase() === "s") {
        console.log("Saindo...");
        return;
      }
      break;
    default:
      console.log("Opção invalida, tente novamente");
  }
}
