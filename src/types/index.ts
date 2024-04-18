export type MenuItem = {
    id: number,
    name: string,
    price: number
}

// Path: React/calculadora-propinas/src/data/db.ts

export type OrderItem = MenuItem & {
    quantity: number
}

// Path: React/calculadora-propinas/src/hooks/useOrder.ts