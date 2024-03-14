// Nico = [F,r,e,d,e,r,i,c] => string => string[]
// [F,r,e,d,e,r,i,c] => Frederic => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if(Array.isArray(input)){
//     return input.join('') // Retornara un "string"
//   } else {
//     return input.split('') // Retornara un "array = string[]"
//   }
// }

export function parseStr(input: unknown):unknown {
  if(Array.isArray(input)){
    return input.join('') // Retornara un "string"
  } else if(typeof input === "string") {
    return input.split('') // Retornara un "array = string[]"
  } else if( typeof input === "number"){
    return false
  }
}

const rArray = parseStr("Frederic")
rArray.reverse()
// if(Array.isArray(rArray)){
//   rArray.reverse()
// }
console.log("rArray", "Frederic => " ,rArray);

const rString = parseStr(['F','r','e','d','e','r','i','c'])
rString.toUpperCase()
// if(typeof rString === "string"){
//   rString.toLocaleLowerCase()
// }
console.log("rString", "['F','r','e','d','e','r','i','c'] => " ,rString);

const rNumber = parseStr(34)
console.log(rNumber);

