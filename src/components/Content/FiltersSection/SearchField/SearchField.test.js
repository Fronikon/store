import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchField } from "./SearchField";

const changeSearchValue = jest.fn()

describe('SearchField component', () => {
  it('value text-input has been changed', () => {
    render(<SearchField changeSearchValue={changeSearchValue}/>)
    userEvent.type(screen.getByRole('textbox'), 'react')
    expect(screen.getByRole('textbox')).toHaveValue('react')
  })
})