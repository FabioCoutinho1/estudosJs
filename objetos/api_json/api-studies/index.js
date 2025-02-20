const box = document.querySelector(".box");
const buttonNetx = document.querySelector("#button-netx");
let newUrl;
let url = "https://rickandmortyapi.com/api/character/";

const fetchApi = async (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { info, results } = data;

      newUrl = info.next;
      results.forEach((element) => {

        const personElement = document.createElement("div")
        personElement.classList.add("person")
        
        const elementP = document.createElement("p");

        const elementImg = document.createElement("img");
        elementImg.setAttribute("src", element.image);

        personElement.appendChild(elementP)
        personElement.appendChild(elementImg)
        box.appendChild(personElement);

        elementP.innerHTML = element.name;
      });
    });
};

const netxPage = () => {
  fetchApi(newUrl);
};

buttonNetx.addEventListener("click", () => {
  netxPage();
});

fetchApi(url);
