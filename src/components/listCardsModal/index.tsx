import { useSelector, useDispatch } from 'react-redux'

import { removeAll,add,remove } from "@/store/reducers/carrinho";
import { RootReducer } from '@/store'
import { Product } from '@/interface/Produtos';

import CardModal from "../cardModal";

export default function ListCardsModal() {

  const { cart } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()

  const removeAllProducts = (id: number) => {
    dispatch(removeAll(id))
  }

  const addProduct = (p: Product) => {
    dispatch(add(p))
  }

  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      {cart.items.map((p) => (
        <CardModal
          addProduct={() => addProduct(p)}
          removeProduct={() => removeProduct(p.id)}
          key={p.id}
          image={p.photo}
          price={Math.floor(p.price)}
          title={p.name}
          removeAllProducts={() => removeAllProducts(p.id)}
          quantidade={p.quantidade}
        />
      ))}
    </>

  )
}
