class CalculadoraClass {
    constructor(resultado) {
        this.resultado = resultado;
        this.numero1 = "";
        this.numero2 = "";
        this.operador = "";
    }

    get getNumero1() {return parseInt(this.numero1);}
    set setNumero1(value) {this.numero1 = value;}
    get getNumero2() {return parseInt(this.numero2);}
    set setNumero2(value) {this.numero2 = value;}
    get getResultado() {return this.resultado;}
    set setResultado(value) {this.resultado = value;}
    get getOperador(){return this.operador;}
    set setOperador(value){this.operador = value;}

    sumar() {
        this.resultado = this.getNumero1 + this.getNumero2;
    }
    restar() {
        this.resultado = this.getNumero1 - this.getNumero2;
    }
    multiplicar() {
        this.resultado = this.getNumero1 * this.getNumero2;
    }
    dividir() {
        this.resultado = this.getNumero1 / this.getNumero2;
    }
    igualar() {
        switch (this.operador) {
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
        this.setNumero1 = "";
        this.setNumero2 = "";
        this.setOperador = "";
    }
}
var miCalculadora;


function botonNumerico(numero) {
    if (!miCalculadora.operador) {
        miCalculadora.numero1 += numero.toString();
    } else {
        miCalculadora.numero2 += numero.toString();
    }
    miCalculadora.setResultado = (miCalculadora.getNumero1 + miCalculadora.getOperador + miCalculadora.getNumero2).toString();
    console.log("numero1: " + miCalculadora.getNumero1);
    console.log("numero2: " + miCalculadora.getNumero2);
    console.log("resultado: " + miCalculadora.getResultado);
}

function botonOperador(operador) {
    miCalculadora.setOperador = operador.toString();
    miCalculadora.resultado += operador;
    console.log(miCalculadora.getOperador);
    console.log("resultado: " + miCalculadora.getResultado);
}

function botonIgualar() {
    miCalculadora.igualar();
    console.log(miCalculadora.getResultado);
}

function crearCalculadora() {
    miCalculadora = new CalculadoraClass("");
    console.log(miCalculadora);
}