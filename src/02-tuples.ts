//Forma tradicional de crear un array de numeros y strings,
//caracteristicas: no tiene limite de elementos, tampoco importa el orden
const prices: (number | string)[] = [2,12232,"dfdf"]

//----TUPLES----
//Una tupla es un array que nos permite especificar la cantidad de elementos
//así como el orden de los tipos de datos, en el siguiente ejemplo, al array "user"
//no podría asignarle un valor de tipo "number" a la posicion 0 ya que lo declare como una array
//que en la primera posicion debe de tener un valor de tipo "string"
let user: [string, number, boolean]
user = ["Frederic", 18, true]

//----DESTRUCTURACION----
const [username, age] = user

console.log(username);
console.log(age);




