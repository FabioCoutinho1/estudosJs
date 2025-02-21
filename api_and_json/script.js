const arr = [];
const user = { nome: "fabio", age: 21 };

const f = async () => {
  fetch("https://reqres.in/api/users/")
    .then((res) => res.json())
    .then((dataRes) => {
      const { data } = dataRes;
      data.forEach((element) => {
        console.log(element.email);
      });
    });
};
f();

const userJson = async () => {
  fetch("https://67b8b87d699a8a7baef50c50.mockapi.io/ususer/1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
userJson();
