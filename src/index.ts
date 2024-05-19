import { RapidocModule } from "dawn-api"
import express from "express"
import routers from "./routes"

const BASE_PATH = "/api"

const app = express()

app.use(BASE_PATH, routers)

RapidocModule.createDocument(app, {
  basePath: BASE_PATH,
  openapi: {
    publicURL: "http://localhost:3000",
  }
})

app.listen(3000, () => {
  console.info(`Server started on ${ 3000 } port.`)
})
