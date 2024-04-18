export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('es-Cl', {
        style: 'currency',
        currency: 'CLP'
    }).format(quantity)
}