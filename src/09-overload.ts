// Nico = [F,r,e,d,e,r,i,c] => string => string[]
// [F,r,e,d,e,r,i,c] => Frederic => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if(Array.isArray(input)){
    return input.join('') // Retornara un "string"
  } else {
    return input.split('') // Retornara un "array = string[]"
  }
}

const rArray = parseStr("Frederic")
console.log("rArray", "Frederic => " ,rArray);

const rString = parseStr(['F','r','e','d','e','r','i','c'])
console.log("rString", "['F','r','e','d','e','r','i','c'] => " ,rString);
