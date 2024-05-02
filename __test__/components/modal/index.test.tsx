import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Modal from "@/components/modal"


describe('Test Page', () => {
  it('Should render properly', () => {
    const { getByText, getByRole } = render(
      < Modal/>
    );

    expect(getByText('MKS' && 'Sistemas')).toBeInTheDocument();

  })
})