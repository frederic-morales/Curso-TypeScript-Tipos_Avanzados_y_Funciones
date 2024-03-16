import { faker } from '@faker-js/faker';

import { addProduct, findProduct, products, updateProduct } from './products/product.service';
import { Product } from './products/product.model';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: ["tag1","tag2"],//faker.random.arrayElements(),
    title: faker.commerce.productName(),
    stock: 54, //faker.datatype.number({min: 10, max: 100}),
    categoryId: "58" // faker.datatype.uuid()
  });
}

console.log(products);
const product = products[0]
updateProduct(product.id, {
  title: "New title",
  stock: 71,
})

findProduct({
  stock: 10,
  color: "red",
})
