//login elements
const login = document.querySelector(".login");
const loginForm = login.querySelector(".login--form");
const loginInput = login.querySelector(".login--input");

//chat elements

const chat = document.querySelector(".chat");
const chatForm = chat.querySelector(".chat--form");
const chatInput = chat.querySelector(".chat--input");
const chatMesagges = chat.querySelector(".chat--messages");

let webSocket;

const user = {
  id: "",
  name: "",
  color: "",
};

const colors = [
  "cadetblue",
  "darkgoldenrod",
  "cornflowerblue",
  "darkkhaki",
  "hotpink",
  "gold",
];

const createMesaggeSelfElement = (content) => {
  const div = document.createElement("div");
  div.classList.add("message--self");
  div.innerHTML = content;

  return div;
};

const createMesaggeOtherElement = (content, sender, senderColor) => {
  const div = document.createElement("div");
  const span = document.createElement("span");

  div.classList.add("message--other");
  span.classList.add("message--sender");

  span.style.color = senderColor;

  div.appendChild(span);

  span.innerHTML = sender;
  div.innerHTML += content;

  return div;
};

const getRandomCorlor = () => {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

const scrollScrean = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
};

const processMesagge = ({ data }) => {
  const { userId, userName, userColor, content } = JSON.parse(data);

  const message =
    userId == user.id
      ? createMesaggeSelfElement(content)
      : createMesaggeOtherElement(content, userName, userColor);

  chatMesagges.appendChild(message);
  scrollScrean()
};

const hanldeLogin = (e) => {
  e.preventDefault();

  user.name = loginInput.value;
  user.id = crypto.randomUUID();
  user.color = getRandomCorlor();

  login.style.display = "none";
  chat.style.display = "flex";

  webSocket = new WebSocket("ws://localhost:8080");
  webSocket.onmessage = processMesagge;
};

const sendMesagge = (e) => {
  e.preventDefault();

  const message = {
    userId: user.id,
    userName: user.name,
    userColor: user.color,
    content: chatInput.value,
  };

  webSocket.send(JSON.stringify(message));

  chatInput.value = "";
};

loginForm.addEventListener("submit", hanldeLogin);
chatForm.addEventListener("submit", sendMesagge);
