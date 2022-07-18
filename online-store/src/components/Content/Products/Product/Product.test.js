import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

const fakeProps = {
  product: {
    id: 1,
    imgName: '1',
    name: 'guitar',
    manufacturer: 'guitar inc',
    year: 2003,
    color: 'Black',
    count: 12,
    fretsCount: 55,
    isPopular: false
  },
  setCounterProduct: jest.fn(),
  isCartFull: false,
  productsInCart: {},
  openAlert: jest.fn()
}

describe('Product component', () => {
  it('manufacturer value has been correct', () => {
    render(
      <Product {...fakeProps} />
    )
    expect(screen.getByText(/Manufacturer/)).toHaveTextContent(fakeProps.product.manufacturer)
  })
  it('year value has been correct', () => {
    render(
      <Product {...fakeProps} />
    )
    expect(screen.getByText(/Year/)).toHaveTextContent(fakeProps.product.year)
  })
  it('color value has been correct', () => {
    render(
      <Product {...fakeProps} />
    )
    expect(screen.getByText(/Color/)).toHaveTextContent(fakeProps.product.color)
  })
  it('count value has been correct', () => {
    render(
      <Product {...fakeProps} />
    )
    expect(screen.getByText(/Count/)).toHaveTextContent(fakeProps.product.count)
  })
  it('frets value has been correct', () => {
    render(
      <Product {...fakeProps} />
    )
    expect(screen.getByText(/Frets/)).toHaveTextContent(fakeProps.product.fretsCount)
  })
})