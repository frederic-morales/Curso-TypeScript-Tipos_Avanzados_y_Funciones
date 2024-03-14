export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "cutomer"
}

export type User = {
  username: string,
  role: ROLES
}

const userFrederic: User = {
  username: "Frederic_s",
  role: ROLES.SELLER
}
