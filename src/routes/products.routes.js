import { Router } from 'express';
import * as productController from '../controllers/products.controller'
const router = Router();

router.get('/',productController.getProduct);
router.get('/:id',productController.getProductById);
router.post('/', productController.createProduct);
router.put('/', productController.updateProductById);
router.delete('/', productController.deleteProductById);

export default router;