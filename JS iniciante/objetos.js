const array = [1,2,3]
array.push(4)
array[0] = "otávio"
console.log(array)

//se eu fizer isso não pode pois é uma const, mas se fosse let poderia
// array = "oi"


const pessoa1 = {
  nome: "Otávio",
  idade:21,
  sobrenome: "Nogueira"
}
console.log(pessoa1.nome)

//criando usando função

function criarObjeto(nome, sobrenome, idade){
  return {
    nome,
    sobrenome,
    idade
  }
}
const pessoa2 = criarObjeto("Otávio", "Nogueira", 21)
console.log(pessoa2)

const Objeto = {
  nome: "Otávio",
  fala(){
    console.log(`Olá, mundo de ${this.nome}`)
  }
}
Objeto.fala()