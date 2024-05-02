import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "@/components/header"
import { Provider } from "react-redux"
import store from "@/store"


describe('Test Page', () => {
  it('Should render properly', () => {
    const { getByText, getByRole } = render(
      <Provider store={store} ><Header bg_header_color="red" /></Provider>
    );

    expect(getByText('MKS' && 'Sistemas')).toBeInTheDocument();

  })
})