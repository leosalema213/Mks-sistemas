import { parseToBrl } from '@/utils'

import{CardModalContainer} from './styles'

interface CardProps {
  image: string,
  title: string,
  price: number,
  removeAllProducts(): void,
  removeProduct(): void,
  addProduct(): void,
  quantidade: number
}


export default function CardModal({
  image, price, title, quantidade, addProduct, removeAllProducts, removeProduct
}: CardProps) {

  return (
    <CardModalContainer>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <div className='buttonQtd'>
        <span className='text'>Qtd:</span>
        <span onClick={removeProduct}>-</span>
        <span className='value'>{quantidade}</span>
        <span onClick={addProduct}>+</span>
      </div>
      <p>{parseToBrl(price)}</p>
      <img className='btn-close' src="/assets/Close_cart.png" onClick={removeAllProducts} />
    </CardModalContainer>
  )
}
