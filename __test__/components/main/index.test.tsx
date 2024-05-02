import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Main from "@/components/main"


describe('Test Page', () => {
  it('Should render properly', () => {
    const { getByText, getByRole } = render(
      <Main />
    );

    expect(getByText('MKS' && 'Sistemas')).toBeInTheDocument();

  })
})