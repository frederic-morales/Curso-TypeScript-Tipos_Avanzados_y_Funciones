import { Category } from '../categories/category.model'
import { BaseModel } from '../base.module'

export type Sizes = 'S' | 'M' | 'L' | 'XL'
export interface Product extends BaseModel{
  title: string,
  stock: number,
  size?: Sizes,
  category: Category
}
