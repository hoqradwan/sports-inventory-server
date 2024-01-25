

// Define an interface for the product document
export type TProduct = {
    name: string;
    price: number;
    quantity: number;
    sportType: string;
    brand?: string;
    size?: string;
    material: string;
    color?: string;
    condition: "new" | "used";
    weight?: number | null; // Optional
    style?: string | null; // Optional
}