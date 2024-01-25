import { z } from "zod";
const ConditionEnum = z.enum(['new', 'used']);

const createProductValidationSchema = z.object({
    body: z.object({
        name: z.string().nonempty(),
        price: z.number(),
        quantity: z.number().int(),
        sportType: z.string().nonempty(),
        brand: z.string().optional(),
        size: z.string().optional(),
        material: z.string().nonempty(),
        color: z.string().optional(),
        condition: ConditionEnum.optional(),
        weight: z.number().nullable(), // Optional
        style: z.string().nullable(), // Optional
    })

});

export const productValidations = {
    createProductValidationSchema
}
