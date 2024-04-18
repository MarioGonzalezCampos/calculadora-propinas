import { useState } from 'react';
import type { MenuItem, OrderItem } from '../types';


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {

        const itemExist = order.find( orderItem => orderItem.id === item.id) // Busca si el item ya existe en el array order

        if (itemExist) {
            //console.log('Ya existe el item')
            const updateOrder = order.map( orderItem => orderItem.id === item.id ?  // si el item existe, se actualiza la cantidad del item en el array order
                { ...orderItem, quantity: orderItem.quantity + 1 } 
                : orderItem
            )
            setOrder(updateOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }
    //console.log(order)
    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter( item => item.id !== id)) // Filtra el item a eliminar del array order y actualiza el estado
    }

    const placeOrder = () => {
        setOrder([]) // Limpia el array order
        setTip(0) // Limpia el estado tip
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}