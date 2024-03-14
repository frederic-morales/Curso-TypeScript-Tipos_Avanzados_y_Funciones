import { ROLES, User } from './03-enum'

const currentUser: User = {
  username: "Frederic_morales",
  role: ROLES.CUSTOMER
}

export const checkAdinRole = () => {
  if(currentUser.role === ROLES.ADMIN){
    return true
  }
  return false
}

const rta = checkAdinRole()
console.log("CheckAdminRole", rta);


//Rest Params
//Permite crear enviar parametros casi sin limite separados por coma, por dentro de la función se crea un array
export const checkRolesV2 = (...roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true
  }
  return false
}

const rta2 = checkRolesV2()
console.log("checkRolesV2", rta2);


