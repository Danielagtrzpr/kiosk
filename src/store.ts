import {create} from 'zustand';
import { OrderItem } from './types';
import { Product } from '@prisma/client';

interface Store {
    order: OrderItem[],
    addToOrder: (product: Product) => void,
}

export const useStore = create<Store>((set) => ({
    order: [],
    addToOrder: (product)=>{
        // Remove the image and categoryId from the product
        const {categoryId, image,...data} = product;

        // cast the product to OrderItem and adding the quantity and subtotal
        set((state) => ({
            order: [...state.order, {
                ...data, 
                quantity: 1,
                subtotal: 1*product.price,
            }
        ]}))     
    }
}));