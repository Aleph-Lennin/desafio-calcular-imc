// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calcularImc() {
    const imc = this.peso / Math.pow(this.altura, 2);
    return imc;
  }
  classificarImc() {
    let imc = this.calcularImc();

    if (imc < 18.5) {
      return `Abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 25) {
      return `Peso normal`;
    } else if (imc > 25 && imc <= 30) {
      return `Acima do peso`;
    } else if (imc > 30 && imc <= 40) {
      return `Obeso`;
    } else {
      return `Obsesidadde grave`;
    }
  }
}
const jose = new Pessoa("José", 70, 1.75);
const maria = new Pessoa("Maria", 62, 1.5);
const rose = new Pessoa("Rose", 102, 1.7);
console.log(jose.classificarImc());
console.log(maria.classificarImc());
console.log(rose.classificarImc());
// console.log(`Nome do paciente : ${jose.nome}`);
// console.log(`Peso do paciente : ${jose.peso}`);
// console.log(`Altura do paciente : ${jose.altura}`);
// console.log(`Informe seu IMC : ${jose.calcularImc().toFixed(2)}`);
