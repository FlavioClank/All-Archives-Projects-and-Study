
// REST
function estados(ce, ...estados){ // ... SIGNIFICA CRIAR UM ARRAY CONTENDO TODOS OS ESTADOS
console.log(estados)                // OS ITENS ESTANDO ANTES DOS 3 PONTOS ... NÃO SERÃO INCLUIDOS
}

estados("CE", "RJ", "SP", "RR", "SC");


// SPREAD

// SPREAD JUNTA OBJETOS DE OUTRAS ARRAYS EM UMA ÚNICA ARRAY
// É SÓ CRIAR UMA CONST COM UM NOME (EXEMPLO-DADOS) E COLOCAR ...PESSOA,...ENDEREÇO

const pessoa = {
    nome: "Paulo",
    idade: 22,
    profissao: "Programador"
}

const endereço = {
    cidade: "Fortaleza",
    estado: "CE"
}


const dados = {
    ...endereço,
    ...pessoa
}

// para executar basta chamar "dados" no console do 
// para visualizar