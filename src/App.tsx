import MenuItem from "./components/MenuItem"
import OrderConents from "./components/OrderConents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"

import useOrder from "./hooks/useOrder"


function App() {

    const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumos</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-6 mr-16 ml-16">
                <section>
                    <h2 className="text-2xl font-bold">Menú</h2>
                    <MenuItem addItem={addItem}/>
                </section>
                {
                    order.length > 0 ? 
                    (
                        <section>
                            <h2 className="text-2xl font-bold">Consumo</h2>
                            <OrderConents order={order} removeItem={removeItem} />

                            <TipPercentageForm setTip={setTip} tip={tip} />

                            <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
                        </section>
                    )
                    : <h2 className="text-2xl font-bold">Consumo</h2>
                }
                
            </main>
        </>
    )
}

export default App
