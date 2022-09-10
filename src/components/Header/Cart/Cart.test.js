import { fireEvent, render, screen } from "@testing-library/react";
import { App } from './../../../App';

describe('Cart component', () => {
  it('cart cleared', () => {
    render(<App />);
    const btn = screen.getByTestId('clear-count-products');
    fireEvent.click(btn)
    expect(screen.queryByTestId('count-products')).toHaveTextContent('0')
  })
})