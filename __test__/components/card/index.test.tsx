import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Card from "@/components/card"

function teste() {
  console.log('ola')
}

describe('Test Page', () => {
  it('Should render properly', () => {
    const {getByText, getByRole} = render(<Card 
      title="titulo teste"
      description="descrição teste"
      buybutton={teste}
      image="#"
      price={1}
      />
    );

    //title and decripton
    expect(getByText("titulo teste" && "descrição teste")).toBeInTheDocument();
    
    //test price
    expect(getByText("R$1")).toBeInTheDocument();

    //test image
    expect(getByRole("img")).toBeInTheDocument();

  })
})