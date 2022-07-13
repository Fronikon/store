import { useState } from 'react';
import { ChangeSortType } from '../../../../types/types';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

type PropsType = {
  changeSort: ChangeSortType
}

export const SortProducts: React.FC<PropsType> = ({ changeSort }) => {
  const [value, setValue] = useState<string>('None');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    changeSort(value);
    setValue(value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={'None'}>None</MenuItem>
          <MenuItem value={'nameUp'}>Name ↑</MenuItem>
          <MenuItem value={'nameDown'}>Name ↓</MenuItem>
          <MenuItem value={'yearUp'}>Year ↑</MenuItem>
          <MenuItem value={'yearDown'}>Year ↓</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};