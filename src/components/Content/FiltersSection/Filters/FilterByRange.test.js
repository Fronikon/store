import { render, screen } from "@testing-library/react";
import { FilterByRange } from "./FilterByRange";

const fakeProps = {
  changeFilters: jest.fn(),
  name: 'Year',
  property: 'year',
  min: 1999,
  max: 2022,
  initialValue: [2000, 2003]
}

describe('FilterByRange component', () => {
  it('current min year is right', () => {
    render(
      <FilterByRange {...fakeProps} />
    )
    expect(screen.queryByTestId('cur-min-year')).toHaveTextContent(/2000/)
  })
  it('current max year is right', () => {
    render(
      <FilterByRange {...fakeProps} />
    )
    expect(screen.queryByTestId('cur-max-year')).toHaveTextContent(/2003/)
  })
})