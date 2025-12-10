// && ---> and  (e)  // Usando && Todos os valores tem que ser true 
// para poder entrar no if


// || ---> or   (ou) //Se peloMenos 1 valor foi true ele executa.


// ! ----> not  (nagar) ---> (!)
// usando o ! para negar, deve-se envolver toda a condição
// em parenteses para funcionar, tudo que é false vira true
// e tudo que é true vira false. SEMPRE RESPEITANDO OS 
// OPERADORES &&, ||.   
//                     EXEMPLO
//                     if(!(idade > 29) && !(tipo == "admin"))

// VEJA, PRIMEIRA CONDIÇÃO ERA FALSA 29 > 29. VIROU TRUE
// E SEGUNDA CONDIÇÃO ERA TRUE E VIROU FALSE !(NEGOU A REGRA)                 

/* 
const idade = 29
const tipo = "admin"


if (idade > 29 && tipo == "admin") {

    console.log("Ele tem mais de 29 anos e é um admin")
} */
// -----------------------------------------------------------


/* ELSE IF é usado no caso do exemplo abaixo, 
se a regra(condição) for TRUE ele executa o código dentro do 
if e ignora o (else if). se a regra(condição) for false
ele não entra no "if" mas entra no "else if". como se fosse 
assim... "if" se isso for verdadeiro(...) execute isso.
"if else"" caso não seja execute isso. else if é como se fosse
 um segundo if*/

/* const idade = 29
const tipo = "admin"


if (idade > 29) {
    console.log("Ele tem mais de 29 anos e é um admin")
} else if(idade > 25){
    console.log("Ele tem mais de 25 anos e é um admin")
}
 */

//------------------------------------------------------------------------

// CASO MEU USUÁRIO NÃO ENTRE EM NENHUMA DESSES 2 TIPOS DE IFS
// VAMOS UTILIZAR O (ELSE). ELE SIMPLESMENTE VAI EXECUTAR O BLOCO QUE ESTÁ
// DENTRO DELE CASO NENHUMA DAS ALTERNATIVAS DE IF OU ELSE IF FOREM EXECUTADA.

// *ELSE


/* const idade = 23
const tipo = "admin"


if (idade > 29) {
    console.log("Ele tem mais de 29 anos e é um admin")
} else if(idade > 26){
    console.log("Ele tem mais de 26 anos e é um admin")
} else if(idade > 23){
    console.log("Ele tem mais de 25 anos e é um admin")
} else{
    console.log("Ele não tem idade mínima")
}

 */



// UTILIZAMOS AS CONDICIONAIS PARA TOMADAS DE DECISÕES
// MANEIRA MAIS LIMPA DE ESCREVER 

const idade = 21
switch(idade) {
    case 20:
        console.log("ele tem 20 anos");
        break;
    case 21:
        console.log("ele tem 21 anos");
    case 22:
        console.log("ele tem 22 anos");


    default:
        console.log("ele não tem nenhuma das idades anteriores")
}