const columns = document.querySelectorAll(".column");
const cards = document.querySelectorAll(".card");

let element;

const dragCard = (e) => {
  element = e.target;
  console.log(element);
};

const dropColumn = ({ target }) => {
  if (!target.classList.contains("card")) {
    target.append(element);
  }
};

const overColumn = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
};

cards.forEach((card) => {
  card.addEventListener("dragstart", dragCard);
});

columns.forEach((column) => {
  column.addEventListener("dragover", overColumn);
  column.addEventListener("drop", dropColumn);
});
