import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import ListCards from "@/components/listCards"


describe('Test Page', () => {
  it('Should render properly', () => {
    const { getByText, getByRole } = render(
      <ListCards />
    );

    expect(getByText('MKS' && 'Sistemas')).toBeInTheDocument();

  })
})