function Pessoa(){ //EXEMPLO: function Pessoa(Parametro(name))
    this.nome = "";
    this.idade = 0
}

const pessoa1 = new Pessoa();
// para ter o mesmo resultado basta passar os parametros para a função
//EXEMPLO: const pessoa1 = new Pessoa("Paulo", 22);
pessoa1.nome = "Paulo";
pessoa1.idade = 22

const pessoa2 = new Pessoa();
// para ter o mesmo resultado basta passar os parametros para a função
//EXEMPLO: const pessoa2 = new Pessoa("João", 30);
pessoa2.nome = "João";
pessoa2.idade = 30

console.log(pessoa2)