import { Product } from '../products/product.model'
import { User } from '../users/user.model';
import { BaseModel } from '../base.module';

interface Order extends BaseModel {
  products: Product[]
  user: User
}
