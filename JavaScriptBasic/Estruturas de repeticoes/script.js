// ESTRUTURAS DE REPETICOES OU LOOPS

// for

// TOMAR CUIDADO AO CRIAR LOOP INFINITO.
// POR ISSO USAR O NUM=0; NUM<5: NUM++        <<<<<------------------------
// ENQUANTO O NUM FOR MENOR QUE 5 ELE SERA EXECUTADO, MAS COMO O NUM++ 
// ADICIONA 1 NUMERO A CADA EXECUÇÃO. QUANDO O NUM VALER 4 QUE É
// MENOR QUE 5, A EXECUÇÃO IRA PARAR. 
// PORQUE O COMPUTADOR ENTENDERA QUE 5 NUM<5 É FALSE. PORQUE NÃO RESPEITA A 
// CONDIÇÃO PASSADA.


/* for(let numero = 0; numero < 5; numero++ ) {
  //  console.log(`Repetição de numero ${numero}`)
  console.log(numero)
  if(numero == 50){
    break
  }
}
 */
//-----------------------------------------------------------------------



// PARA, CADA
// FOR IN
/* 
const object = {
    name: "Paulo",
    idade: 22,
    cidade: "Fortaleza"
}


//rodar loop
//PARA ACESSARMOS OS VALORES DAS PROPRIEDADES DOS OBJETOS QUE SÃO: NAME,IDADE,
//E CIDADE... PRECISAMOS USAR O [], EXEMPLO: CONSOLE.LOG(OBJECT[KEY])



//para - cada - objeto
for(key in object){
    console.log(object[key])
    //EXEMPLO: CONSOLE.LOG(OBJECT[KEY]) PARA ACESSAR OS VALORES...
}


 */
//----------------------------------------------------------------------


//* FOR OF
// mesma coisa do for in. a DIFERENÇA É QUE ELE VAI RODAR UM LOOP PARA CADA 
// ITEM DE UMA LISTA QUE TEM
//EXEMPLO:
/* 
const array = ["HB20","Hilux","Corolla"]

for(item of array){
    console.log(item)

} */


//---------------------------------------------------------------------

//WHILE

let numero = 0;

while(numero < 5) {
    console.log(numero);
    numero++
}

/*FUNCIONA DA MESMA FORMA QUE O FOR. SÓ É UMA MANEIRA DIFERENTE DE ESCREVER 

LEMBRANDO QUE PODE SER COLOCADO QUALQUER CODIGO FUNCIONAL QUE PRECISE SER
RODADO COMO UM LOOP. NÃO SOMENTE UM CONSOLE.LOG OU UM ALERT. MAS QUALQUER
COISA. 
O CONSOLE.LOG ESTA SENDO USADO PARA SER VISIVELMENTE USADO PARA TESTE*/