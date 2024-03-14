const withoutEnd = () => {
  while(true){
    console.log("Nunca parar de aprender");
  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input === "string"){
    return "Es un string"
  } else if( Array.isArray(input)){
    return "Es un fucking array"
  }

  return fail("Not Macht")
}

console.log(example("Hola bro"));
console.log(example(["Hola bro", "soy un array"]));
console.log(example(87878));
console.log(example("Hola bro despues del fail"));
