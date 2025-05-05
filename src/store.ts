import {create} from 'zustand';
import { OrderItem } from './types';
import { Product } from '@prisma/client';
import { it } from 'node:test';

interface Store {
    order: OrderItem[],
    addToOrder: (product: Product) => void,
    incrementQuantity: (id: Product["id"]) => void,
    decrementQuantity: (id: Product["id"]) => void,
    removeOrderItem: (id: Product["id"]) => void,
}

export const useStore = create<Store>((set,get) => ({
    order: [],
    addToOrder: (product)=>{
        // Remove the image and categoryId from the product
        let orderItems: OrderItem[]= [];
        const {categoryId, image,...data} = product;

        if(get().order.some((item) => item.id === product.id)){
            orderItems = get().order.map((item) => {
                if(item.id === product.id){
                    return {...item,
                        quantity: item.quantity + 1, 
                        subtotal: (item.quantity + 1) * product.price
                    }
                }
                else {
                    return item
                }
            })
        } else {
            orderItems = [...get().order, {
                ...data, 
                quantity: 1,
                subtotal: 1*product.price,
            }]
        }
        
        // cast the product to OrderItem and adding the quantity and subtotal
        set(() => ({order: orderItems}))  
    },
    incrementQuantity: (id) => {
        const orderItems = get().order.map((item) => {
            if(item.id === id){
                return {...item,
                    quantity: item.quantity + 1, 
                    subtotal: (item.quantity + 1) * item.price
                }
            }
            else {
                return item
            }
        })
        set(() => ({order: orderItems}))
    },
    decrementQuantity: (id) => {
        const orderItems = get().order.map((item) => {
            if(item.id === id){
                return {...item,
                    quantity: item.quantity - 1, 
                    subtotal: (item.quantity - 1) * item.price
                }
            }
            else {
                return item
            }
        }).filter((item) => item.quantity > 0)
        set(() => ({order: orderItems}))
    },
    removeOrderItem: (id) => {
        set((state)=>({
            order: state.order.filter((item)=> item.id !=id && item)
        }))
    }
}));