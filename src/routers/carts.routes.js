import { Router } from "express"
import * as cartsController from "../controllers/carts.controller.js"
import { isUser } from "../middlewares/autentication.js"

export const cartsRouter = Router()

// Methods
// obtener carritos
cartsRouter.get('/', cartsController.handleGet)

// obtener carrito por id
cartsRouter.get('/:cid', cartsController.handleGetById)

// crear carrito
cartsRouter.post('/', cartsController.handlePost)

// agregar producto al carrito
cartsRouter.post('/:cid/products/:pid', isUser, cartsController.handlePostProduct)

// actualizar SÓLO la cantidad de ejemplares del producto por cualquier cantidad pasada desde req.body.
cartsRouter.put("/:cid/products/:pid", isUser, cartsController.handlePut)

// eliminar todos los productos del carrito
cartsRouter.delete("/:cid", isUser, cartsController.handleDeleteCart)

// eliminar del carrito el producto seleccionado
cartsRouter.delete("/:cid/products/:pid", isUser, cartsController.handleDeleteProduct)

// finalizar compra
cartsRouter.get("/:cid/purchase", cartsController.finalizePurchase)


