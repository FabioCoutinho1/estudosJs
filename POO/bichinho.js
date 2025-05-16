class Pet {
  constructor(nome) {
    this.nome = nome; //nome do animal
    this.hunger = 50; // 0 (sem fome) a 100 (muita fome)
    this.energy = 50; //  0 (cansado) a 100 (disposto)
  }

  eat() {
    console.log(` ${this.nome} is esting`);
    this.energy += 20;
    this.hunger -= 10;

    if (this.energy > 100) this.energy = 100;
    if (this.hunger < 0) this.energy = 0;
  }

  toPlay() {
    console.log(` ${this.nome} is joking`);
    this.energy -= 30;
    this.hunger += 15;

    if (this.energy < 0) this.energy = 0;
    if (this.hunger > 100) this.energy = 100;
  }

  status() {
    console.log(`--- Status de ${this.nome} ---`);
    console.log(`Fome: ${this.hunger}`);
    console.log(`Energia: ${this.energy}`);
  }
}

const pet = new Pet("miumiu");
pet.status();
pet.eat();
pet.status();
pet.toPlay();
pet.status();
