// ITERAR SIGNIFICA REPETIR DETERMINADA COISA TIPO UM LOOP

const estoque = ["arroz", "feijão", "arroz", "macarrão", "batata", ""]
const precos = [3.50, 5, 3.50, 2, 2.50, 0]

// const pessoas = [{nome:"Flavio Vieira Fernandes", Idade: 23, cpf:"06321761133"},{nome:"Katiuscia Maciel Pereira", idade: 50, cpf:"78574455172"}] 


// pessoas.forEach((valor, index, array) => {          //callback
// console.log(valor, index)
// })

// forEach serve para executar uma determinada função
// que seja a quantidade de itens que temos dentro do array
// tendo 2 itens ela automaticamente executa 2 vezes...


// ITERAR SIGNIFICA REPETIR DETERMINADA COISA TIPO UM LOOP



const retornoMap = estoque.map((valor, index, array) => {
    return `${valor} ${index}`
})

// map itera sobre todos os itens do array e retorna um novo valor para cada iteração
//  e teremos um novo array apartir desses retornos