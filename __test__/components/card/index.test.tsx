import { fireEvent, render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Card from "@/components/card"

function teste() {
  console.log('ola')
}

describe('Testes para o componente principal', () => {
  it('Deve renderizar corretamente', () => {
    const { getByText, getByRole } =
      render(<Card
        title="titulo teste"
        description="descrição teste"
        buybutton={teste}
        image="#"
        price={1}
      />

      );
    expect(getByText("titulo teste" && "descrição teste")).toBeInTheDocument();
  })
})