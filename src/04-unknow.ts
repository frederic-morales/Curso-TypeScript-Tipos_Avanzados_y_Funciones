let x:unknown = 10;
x = true
x = undefined
x = null
x = []
x = {}


// unknown no obliga a hacer una verificaciona antes de cambiar el tipo de dato
if( typeof x === "string"){
  x.toLocaleLowerCase()
}

// x.toLocaleLowerCase() // error


function sum(a:unknown, b: number) {
  // comprobando el tipo
  if(typeof a === "number"){
      return a + b
  }
}
sum(10,2) // 12
// Error
sum("hola",2) // La variable 'hola' no es un número
sum({a:5},2) // La variable [object Object] no es un númer``
