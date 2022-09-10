import { ChangeSortType } from '../../../../types/types';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { memo } from 'react';

type PropsType = {
  changeSort: ChangeSortType
  sort: string
}

export const SortProducts: React.FC<PropsType> = memo(({ changeSort, sort }) => {

  const handleChange = (event: SelectChangeEvent): void => {
    changeSort(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={'none'}>None</MenuItem>
          <MenuItem value={'nameUp'}>Name ↑</MenuItem>
          <MenuItem value={'nameDown'}>Name ↓</MenuItem>
          <MenuItem value={'yearUp'}>Year ↑</MenuItem>
          <MenuItem value={'yearDown'}>Year ↓</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
});