import { BaseModel } from "../base.module"

export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "cutomer"
}

export interface User extends BaseModel {
  username: string,
  role: ROLES
}
