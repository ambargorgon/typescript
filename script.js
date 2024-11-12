'use strict';
//Console.logs
console.log('Hola mundo, mi primer programa en TS');
//Anotacion tipos de datos 
let palabra = "hola";
let edad = 23;
let und = undefined;
let vacio = null;
let cualquiera = null;
const numeros = [1, 2, 3, 4];
const nombres = ['Juan', 'Maria'];
const booleanos = [true, false, true];
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["Lunes"] = 0] = "Lunes";
    diasSemana[diasSemana["Martes"] = 1] = "Martes";
    diasSemana[diasSemana["Miercoles"] = 2] = "Miercoles";
})(diasSemana || (diasSemana = {}));
//Anotacion de funciones con retorno
function sumar(a, b) {
    return a + b;
}
//Funcion sin retorno con distintos tipos de dato
let interMiami = 11;
let fcDallas = 10;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log('EMPATE');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
let programador1 = {
    nombre: 'Federico',
    edad: 22
};
let programador2 = {
    nombre: 'Maria',
    edad: 20,
    tomaMate: false,
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programador1);
enviarCurriculum(programador2);
//Clases 
class Pelicula {
    constructor(nombre, protagonista, anio) {
        this.nombre = nombre;
        this.protagonista = protagonista;
        this.anio = anio;
    }
    imprimirInformacion() {
        console.log(`La pelicula ${this.nombre} del año ${this.anio} fue protagonizada por ${this.protagonista}`);
    }
}
let pelicula1 = new Pelicula('Barbie', 'Margot Robbie', 2023);
pelicula1.imprimirInformacion();
//Encapsulamiento y genericos
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    getNombre() {
        return this.nombre;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Maiten Oviedo');
sorteo.setNumero(7);
console.log(sorteo.sortear());
