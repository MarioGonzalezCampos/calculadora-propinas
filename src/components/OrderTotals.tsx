import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

const OrderTotals = ( {order, tip, placeOrder } : OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price ), 0), [order])
    // Calcula la propina
    const TipAmount = useMemo(() =>subtotalAmount * tip, [tip, order])

    const TotalAmount = useMemo(() => subtotalAmount + TipAmount, [subtotalAmount, TipAmount])

    return (
        <>
            <div className='space-y-3'>
                <h2 className='text-lg font-bold'>Total y Propina:</h2>
                <p>Subtotal a pagar: {' '} 
                    <span className='font-bold'> {formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina: {' '} 
                    <span className='font-bold'> {formatCurrency(TipAmount)}</span>
                </p>
                <p>Total a pagar: {' '} 
                    <span className='font-bold'> {formatCurrency(TotalAmount)}</span>
                </p>
            </div>

            <button 
                className="w-full uppercase font-bold bg-black text-white rounded-xl py-2 mt-10 disabled:opacity-10" 
                disabled={TotalAmount === 0}
                onClick={() => placeOrder()}
            >
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotals