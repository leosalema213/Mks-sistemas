import { Product } from "@/interface/Produtos"

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
export const getTotalPrice = (items: Product[]) => {
  return items.reduce((accumulator, currentItem) => {
    let currentValue = Math.floor(currentItem.price)
    if (currentValue) {
      return (accumulator += currentValue * currentItem.quantidade)
    }
    return 0
  }, 0)
}
