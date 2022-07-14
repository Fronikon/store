import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { useState, useEffect } from 'react';
import { ChangeFiltersType } from '../../../../types/types';

type PropsType = {
  name: string
  values: string[]
  property: string
  changeFilters: ChangeFiltersType
  initialValue: string[]
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const FilterByProperty: React.FC<PropsType> = ({ name, values, property, changeFilters, initialValue }) => {
  const [value, setValue] = useState<string[]>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    let targetValue = event.target.value;
    targetValue = typeof targetValue === 'string' ? targetValue.split(',') : targetValue;
    changeFilters(property, targetValue);
    setValue(targetValue);
  };

  return (
    <div className='filter'>
      <FormControl sx={{ my: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={name} />}
          renderValue={(selected: string[]) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {values.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};