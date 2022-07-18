import { fireEvent, render, screen } from "@testing-library/react";
import { FilterByPopular } from "./FilterByPopular";

const fakeProps = {
  property: 'isOnlyPopular',
  changeFilters: jest.fn(),
  initialValue: false
}

describe('FilterByPopular component', () => {
  it('checkbox has been checked', () => {
    render(
      <FilterByPopular {...fakeProps} />
    )
    fireEvent.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})