

var miCalculadora;
class CalculadoraClass {
    constructor() {
        this.resultado = "";
        this.numero1 = "";
        this.numero2 = "";
        this.operador = "";
    }

    get getNumero1(){return parseInt(this.numero1);}
    set setNumero1(value){this.numero1 = value;}
    get getNumero2(){return parseInt(this.numero2);}
    set setNumero2(value){this.numero2 = value;}
    get getResultado(){return this.resultado;}
    set setResultado(value){this.resultado = value;}
    get getOperador(){return this.operador;}
    set setOperador(value){this.operador = value;}

    sumar(){
        this.resultado = this.getNumero1 + this.getNumero2;
    }
    restar(){
        this.resultado = this.getNumero1 - this.getNumero2;
    }
    multiplicar(){
        this.resultado = this.getNumero1 * this.getNumero2;
    }
    dividir(){
        this.resultado = this.getNumero1 / this.getNumero2;
    }
    igualar(){
        switch (this.getOperador) {
            case '+':
            this.sumar();
            break;
        case '-':
            this.restar();
            break;
        case '*':
            this.multiplicar();
            break;
        case '/':
            this.dividir();
            break;

        default:
            break;
        }
    }
}


function botonNumerico(numero) {
    if (miCalculadora.operador == "") {
        miCalculadora.numero1 += numero.toString();
        console.log("El numero 1: " + miCalculadora.getNumero1);
    } else {
        miCalculadora.numero2 += numero.toString();
        console.log("El numero 2: " + miCalculadora.getNumero2);
    }

    miCalculadora.setResultado = (miCalculadora.numero1 + miCalculadora.operador + miCalculadora.numero2);
    console.log("El resultado : " + miCalculadora.getResultado);
}

function botonOperador(operador) {
    miCalculadora.operador = operador;
    console.log("El operador es: " + miCalculadora.getOperador);
}

function botonIgualar(){
    miCalculadora.igualar();
    console.log(miCalculadora.getResultado);
}

function crearCalculadora() {
    miCalculadora = new CalculadoraClass("");
    console.log(miCalculadora);
}

$("#id3").click(() => {
    $("#idJquery").show();
}
)
