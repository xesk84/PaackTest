import { Delivery } from "../../entities";

const deliveries : Array<Delivery> = [
    {
        id: 1234,
        address: 'Address 1',
        latitutde: 1.1232313,
        longitude: 1.3232323,
        customerName: 'Juan Pérez'
    },
    {
        id: 4321,
        address: 'Address 2',
        latitutde: 2.5465785,
        longitude: 5.4566454,
        customerName: 'Lluisa Puig'},
    {
        id: 9087,
        address: 'Address 3',
        latitutde: 5.4546458,
        longitude: 8.2498874,
        customerName: 'Amalia Moliner'},
    {
        id: 1334,
        address: 'Address 4',
        latitutde: 4.5465745,
        longitude: 3.2135584,
        customerName: 'Raimón Llach'},
    {
        id: 4456,
        address: 'Address 5',
        latitutde: 1.5458787,
        longitude: 6.6549848,
        customerName: 'Félix Gonzalez'},
] 




export const getDeliveries = (): Array<Delivery> => {
    return deliveries;
}