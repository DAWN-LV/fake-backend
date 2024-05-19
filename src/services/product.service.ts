import { CreateProductDTO } from "../common/dto/create-product.dto"

abstract class ProductService {
  static create(dto: CreateProductDTO) {
    return dto
  }

  static findAll() {
    return "findAll"
  }
}

export default ProductService