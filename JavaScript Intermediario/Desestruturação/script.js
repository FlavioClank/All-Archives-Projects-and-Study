//  const pessoa = {
//     nome: "Paulo",            //PROPRIEDADES
//     idade: 22,                 //PROPRIEDADES
//     cidade: "Fortaleza"         //PROPRIEDADES
//  }

// const {} = pessoa;       //variavel Objeto, recebe nome pessoa


//  console.log(pessoa.cidade)

// -----------------------------------------------------------------


//   const pessoa = {
//     nome: "Paulo",            //PROPRIEDADES
//     idade: 22,                //PROPRIEDADES
//     endereço: {                 //Objeto dentro de Objeto
//         cidade: "Fortaleza",    //Propriedades do objeto
//         estado: "CE",            //Propriedades do objeto
//         cep: 7820000             //Propriedades do objeto
//     }
//  }

// const {cidade} = pessoa.endereço       //variavel Objeto, recebe nome pessoa


//  console.log(cidade)

// -------------------------------------------------------------------------------------------
// VALOR NÃO EXISTE OU VALOR EXISTE MAS SE PASSADO OUTRO VALOR
// SERÁ IGNORADO E SERA EXIBIDO O VALOR DA PROPRIEDADE...(ALTURA)

//   const pessoa = {
//     nome: "Paulo",            //PROPRIEDADES
//     idade: 22,                //PROPRIEDADES
//     endereço: {                 //Objeto dentro de Objeto
//         cidade: "Fortaleza",    //Propriedades do objeto
//         estado: "CE",            //Propriedades do objeto
//         cep: 7820000             //Propriedades do objeto
//     },
//     altura: 1.80          // VALOR OFICIAL(QU SERÁ EXIBIDO)
//  }

// const {altura = 1.72} = pessoa   //VALOR IGNORADO


 console.log(altura)
