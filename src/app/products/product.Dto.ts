import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>; // Hace lo contrario de Omit

export interface UpdateProductDto extends Partial<CreateProductDto> {

} // El "Partial" Nos coloca cada campo con signo de pregunta osea vuelve todos los campios opcionales


type example2 = Required<Product>; // Hace lo contrario de Partial
