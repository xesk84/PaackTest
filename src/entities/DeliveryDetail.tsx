import { Delivery } from "./Delivery";

export interface DeliveryDetail extends Delivery {
    requiresSignature: boolean,
    specialInstructions: string
}