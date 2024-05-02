import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import CardModal from "@/components/cardModal"

function testeAddProduct() { 

}

describe('Test Page', () => {
  it('Should render properly', () => {
    const {getByText, getByRole} = render(<CardModal 
      title="titulo teste"
      quantidade={1}
      addProduct={testeAddProduct}
      removeAllProducts={testeAddProduct}
      removeProduct={testeAddProduct}
      image="#"
      price={100}
      />
    );

    //title and decripton
    expect(getByText("titulo teste")).toBeInTheDocument();

    //test price
    expect(getByText("R$ 100,00")).toBeInTheDocument();

    //test image
    expect(getByRole("img")).toBeInTheDocument();

  })
})