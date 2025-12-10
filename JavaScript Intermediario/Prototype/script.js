function Game(){ //FUNÇÃO CONSTRUTORA
    this.pulou = () => alert("O personagem Pulou");
    this.deitou = () => alert("O personagem deitou");
}

Game.prototype.correu = () => alert("O personagem Correu");

const novoJogo = new Game();

const meuJogo = "fifa"

console.log(meuJogo.toUpperCase()) // METODOS E PROPRIEDADES