import { DeliveryDetail, Delivery } from '../../entities';

const deliveries : Array<DeliveryDetail> = [
    {
        id: 1234,
        address: 'Address 1',
        latitutde: 1.1232313,
        longitude: 1.3232323,
        customerName: 'Juan Pérez',
        specialInstructions: 'Call 30 minutes before delivery',
        requiresSignature: true
    },
    {
        id: 4321,
        address: 'Address 2',
        latitutde: 2.5465785,
        longitude: 5.4566454,
        customerName: 'Lluisa Puig',
        specialInstructions: 'Be aware with the dog',
        requiresSignature: false
    },
    {
        id: 9087,
        address: 'Address 3',
        latitutde: 5.4546458,
        longitude: 8.2498874,
        customerName: 'Amalia Moliner',
        specialInstructions: 'The mother of Amalia will pick the delivery',
        requiresSignature: true
    },
    {
        id: 1334,
        address: 'Address 4',
        latitutde: 4.5465745,
        longitude: 3.2135584,
        customerName: 'Raimón Llach',
        specialInstructions: 'Let the delivery in front of the door',
        requiresSignature: false
    },
    {
        id: 4456,
        address: 'Address 5',
        latitutde: 1.5458787,
        longitude: 6.6549848,
        customerName: 'Félix Gonzalez',
        specialInstructions: 'Ring the door of 2nd floor 3rd door neighbour, she will pick the delivery',
        requiresSignature: true
    },
] 



export const getDelivery = (id: number): DeliveryDetail => {
    try {
        return id > 0 ? deliveries.find(i => i.id === id): null;
    } catch (error) {
        console.error(error);
        return null;
    }
}