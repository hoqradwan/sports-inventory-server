import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
    const result = await productServices.createProductIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Product is created succesfully!',
        data: result
    });
})

export const productControllers = {
    createProduct
}