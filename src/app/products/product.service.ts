import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //data.id = "dsfddfdf"
  //data.createdAt = new Date(2005, 31, 8)
  products.push(data);
}
