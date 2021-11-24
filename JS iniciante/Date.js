const Data = new Date(); // data atual

console.log(Data.toString())

// ou
// new Date(2021, 3, 20, 15,14,27) 2021 abril dia 20 as 15:14:27
console.log("Data ", Data.getDate())
console.log("Mês ", Data.getMonth())
console.log("Ano ", Data.getFullYear())
console.log("Hora ", Data.getHours())