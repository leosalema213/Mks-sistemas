import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Footer from "@/components/footer"

function testeAddProduct() { 

}

describe('Test Page', () => {
  it('Should render properly', () => {
    const {getByText, getByRole} = render(<Footer/>
    );

    //text
    expect(getByRole('paragraph')).toBeInTheDocument();
    expect(getByText("MKS sistemas © Todos os direitos reservados")).toBeInTheDocument();


  })
})