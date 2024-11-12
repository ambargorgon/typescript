'use strict'

//Console.logs
console.log('Hola mundo, mi primer programa en TS')

//Anotacion tipos de datos 
let palabra : string = "hola"
let edad: number = 23
let und: undefined = undefined;
let vacio: null = null;

let cualquiera: string | null | undefined = null;

const numeros : number[]= [1,2,3,4]
const nombres: string[] = ['Juan','Maria']
const booleanos: boolean[] = [true,false,true]

enum diasSemana {
	Lunes,
	Martes,
	Miercoles
}

//Anotacion de funciones con retorno
function sumar (a:number, b:number) :number{
	return a+b
}

//Funcion sin retorno con distintos tipos de dato
let interMiami = 11
let fcDallas = 10
let messi = 1
let juegaMessi = true
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
  let motivo: string = ''
  if (juegaMessi) {
    equipo1 += messi
    motivo = ' porque juega Messi'
  }
  if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`)
  if (equipo1 == equipo2) console.log('EMPATE')
  if (equipo1 < equipo2) console.log('Gana FC Dallas')
}
jugar(interMiami, fcDallas, juegaMessi)

// Anotacion de objetos

type Programador = {
	nombre: String,
	edad: number | null ,
	tomaMate? : boolean, //el '?' indica que no es obligatorio
}

let programador1 : Programador = {
	nombre: 'Federico',
	edad: 22
}

let programador2 : Programador = {
	nombre: 'Maria',
	edad: 20,
    tomaMate: false,
}

function enviarCurriculum(programador: Programador) {
  console.log(`Este curriculum es de ${programador.nombre}`)
}

enviarCurriculum(programador1)
enviarCurriculum(programador2)

//Clases 
class Pelicula {
  private nombre?: string;
  private protagonista?: string;
  private anio?: number;


  constructor(nombre: string, protagonista: string, anio: number) {
    this.nombre = nombre
    this.protagonista = protagonista
    this.anio = anio
  }

  imprimirInformacion(){
    console.log(`La pelicula ${this.nombre} del año ${this.anio} fue protagonizada por ${this.protagonista}`)
  }
}

let pelicula1 = new Pelicula('Barbie', 'Margot Robbie', 2023)
pelicula1.imprimirInformacion()

//Encapsulamiento y genericos
class Sorteo<T> {
  //Encapsulamiento
  private ticket?: T
  constructor(private nombre: string) {}
  setNumero(ticket: T) {
    this.ticket = ticket
  }
  getNumero() {
    return this.ticket
  }
  getNombre() {
    return this.nombre
  }
  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`
  }
}
let sorteo = new Sorteo<number>('Maiten Oviedo')
sorteo.setNumero(7)
console.log(sorteo.sortear())