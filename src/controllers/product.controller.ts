import { Body, Controller, Get, Post } from "dawn-api"
import ProductService from "../services/product.service"
import { CreateProductDTO } from "../common/dto/create-product.dto"

@Controller("/products")
class ProductController {
  @Post("/")
  create(@Body() dto: CreateProductDTO) {
    return ProductService.create(dto)
  }

  @Get("/")
  findAll() {
    return ProductService.findAll()
  }
}

export default new ProductController()
