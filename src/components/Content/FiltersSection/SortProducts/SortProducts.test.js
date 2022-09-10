import { render, screen } from "@testing-library/react";
import { SortProducts } from "./SortProducts";

describe('SortProducts component', () => {
  it('if sorting value is nameDown', () => {
    render(
      <SortProducts sort='nameDown'/>
    )
    expect(screen.getByRole('button')).toHaveTextContent(/Name ↓/i)
  })
  it('if sorting value is none', () => {
    render(
      <SortProducts sort='none'/>
    )
    expect(screen.getByRole('button')).toHaveTextContent(/None/i)
  })
})