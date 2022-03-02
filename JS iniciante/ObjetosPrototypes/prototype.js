function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
Pessoa.prototype.estouAqui = "Hahahahaha"
const pessoa1 = new Pessoa("Otávio", "A.")

console.log(pessoa1.nomeCompleto())