import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productValidations } from "./product.validation";
import auth from "../../middlewares/auth";
import { productControllers } from "./product.controller";
const router = express.Router();

router.post("/create-product", auth(), validateRequest(productValidations.createProductValidationSchema), productControllers.createProduct);

export const ProductRoutes = router;