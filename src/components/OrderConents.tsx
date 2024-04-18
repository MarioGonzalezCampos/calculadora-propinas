import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"
type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
}

const OrderConents = ( {order, removeItem} : OrderContentsProps ) => {
    
    //console.log('order ....', order)

    return (
        <>
            <div>
                {
                    order.length === 0 ? 
                    <p>No hay elementos en la orden</p> : 
                    (
                        order.map( item => (
                            <div key={item.id} className="flex justify-between items-center border-t border-gar-200 py-5 last-of-type:border-b">
                                <div>
                                    <p className="text-lg">
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                    <p className="text-lg font-bold">
                                        Cantidad: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>
                                
                                <button
                                    className="bg-red-600 h-8 w-8 rounded-full text-white font-bold"
                                    onClick={()=> removeItem(item.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )
}

export default OrderConents