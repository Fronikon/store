import './SearchField.css';
import { TextField } from '@mui/material';
import { ChangeEvent, useState, memo } from 'react';
import { ChangeSearchValueType } from '../../../../types/types';

type PropsType = {
  changeSearchValue: ChangeSearchValueType
}

export const SearchField: React.FC<PropsType> = memo(({ changeSearchValue }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    changeSearchValue(value);
  };

  const clearField = () => {
    setValue('');
    changeSearchValue('');
  };

  return (
    <div className='search-field__wrapper'>
      <TextField
        id="outlined-basic"
        label="Search guitar"
        variant="outlined"
        onChange={handleChange}
        autoComplete={'off'}
        placeholder={'Guitar name'}
        autoFocus
        value={value}
        fullWidth
      />
      {
        value.length !== 0 &&
        <div
          className='search-field-clear'
          onClick={clearField}
        >✖</div>
      }
    </div>
  );
});