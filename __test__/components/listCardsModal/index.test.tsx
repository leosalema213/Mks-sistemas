import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import ListCardsModal from "@/components/listCardsModal"
describe('Test Page', () => {
  it('Should render properly', () => {
    const { getByText } = render(
      <ListCardsModal />
    );

    expect(getByText('MKS' && 'Sistemas')).toBeInTheDocument();

  })
})