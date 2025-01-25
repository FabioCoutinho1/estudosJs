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

while (true) {
  console.log("(1) adicionar contato \n");
  console.log("(2) mostrar contatos salvos\n");
  console.log("(3) apagar contato \n");
  console.log("(4) sair");

  const key = prompt();

  switch (key) {
    case "1":
      const nome = prompt(console.log("Nome:"));
      const numero = prompt(console.log("Numero:"));
      const dd = prompt(console.log("DD:"));

      criarContatos(nome, numero, dd);
      break;

    case "2":
      mostrarListaDeContatos("Aqui esta sua lista", arrDeContatos);
      break;

    case "3":
      mostrarListaDeContatos("", arrDeContatos);
      const numeroDaLista = parseInt(
        prompt(console.log("Selecione o numero do contato que dejesa apagar:"))
      );
      arrDeContatos.splice(numeroDaLista - 1, 1);

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
