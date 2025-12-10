class Mamifero {
    constructor() {
        this.especie = "Mamiferos"
    }

    dormir(){
        alert("esse Mamifero dormiu")
    }
}

class Pessoa extends Mamifero {
    constructor(name, idade) {
        this.name = name
        this.idade = idade
        this.cidade = "Fortaleza"
    }

    static andou(){
        alert(`${this.name} andou`)
    }
}


const pessoa1 = new Pessoa("Paulo", 22);
