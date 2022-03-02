// literal
const pessoa = {
  nome: "Otávio",
  sobrenome: "Augusto",
  idade: 22,
  endereco: {
    rua: "Monsenhor Aluísio",
    bairro: "Juazeiro"
  },
  falar(){
    console.log("Olá")
  }
}
console.log(pessoa.endereco.bairro)

// deletando uma chave

delete pessoa.sobrenome
console.log(pessoa)

pessoa.falar()