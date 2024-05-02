import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import SkeletonCard from "@/components/skeletonCard"


describe('Test Page', () => {
  it('Should render properly', () => {
    const { getByText, getByRole } = render(
      <SkeletonCard />
    );

    expect(getByText('MKS' && 'Sistemas')).toBeInTheDocument();

  })
})