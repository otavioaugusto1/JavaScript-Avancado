const verdadeira = true;
// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função
let nome = "Otávio"; // criando
var nome2 = "Otávio";

if (verdadeira){
  let nome = "Augusto"; // criando
  console.log(nome, nome2)
  if (verdadeira){
    let nome = "Outra coisa" // criando
    console.log(nome, nome2)
  }
}