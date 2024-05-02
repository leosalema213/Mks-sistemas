import { CardBody, CardButton, CardContainer } from './styles'

interface CardProps {
  image: string,
  title: string,
  price: number,
  description: string,
  buybutton(): void
}


export default function Card({ image, description, price, title, buybutton }: CardProps) {
  return (
    <CardContainer>
      <CardBody>
        <img src={image} alt="" />
        <div className="card_title">
          <h2>{title}</h2> <span>{"R$" + price}</span>
        </div>
        <p>{description}</p>
      </CardBody>
      <CardButton onClick={buybutton}>
        <img src="/assets/shopping-bag.png" />
        Comprar
      </CardButton>
    </CardContainer>
  )
}