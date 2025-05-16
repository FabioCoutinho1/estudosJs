class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  // aqui temos uma clsse statica, ou seja ela nao usa
  // nenhum dado do objeto, entao para rodar esse metodo
  // a gente chama ele pela classe e nao pela constante
  static speek() {
    console.log("Hellow Word!");
  }
}

const pessoa = {
  nome: "Natacha",
  sobrenome: "Rodrigues",
  idade: 20,
};

const person = new Person("Fabio", "Farias", 22);
console.log(person);
console.log(pessoa);

person.getFullName();
// nao estatico
Person.speek();
// metodo estatico

// heranças
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  speek() {
    console.log(`${this.nome} made some noise`);
  }
}

class Dog extends Animal {
  constructor(nome) {
    super(nome);
  }

  speek() {
    console.log(`${this.nome} barked !`);
  }
}

const animal = new Animal("miumiu");
const dog = new Dog("Hulk");
animal.speek();
dog.speek();
