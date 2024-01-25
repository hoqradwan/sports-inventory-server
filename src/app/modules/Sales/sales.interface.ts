import { Types } from "mongoose";

export type TSales = {
    product: Types.ObjectId;
    buyerName: string;
    quantity: string;
}