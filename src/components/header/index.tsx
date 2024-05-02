import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '@/store';
import { open } from "@/store/reducers/carrinho";

import {HeaderContainer,HeaderTitle} from './styles'

export interface HeaderProps {
  bg_header_color: string
}


export default function Header({ bg_header_color }: HeaderProps) {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const productsInCart =  items.length

  const openModal = () => {
    dispatch(open())
  }


  return (
    <HeaderContainer bg_header_color={bg_header_color}>
      <HeaderTitle className="title">
        <h1>MKS</h1>
        <p>Sistemas</p>
      </HeaderTitle>
      <button className='carrinho' onClick={openModal}>
        <img src="/assets/carrinho.png" /> {productsInCart}
      </button>
    </HeaderContainer>
  )
}