import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { ChangeFiltersType } from '../../../../types/types';

type PropsType = {
  name: string
  values: string[]
  property: string
  changeFilters: ChangeFiltersType
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

export const FilterByProperty: React.FC<PropsType> = ({ name, values, property, changeFilters }) => {
  const [someValue, setSomeValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof someValue>) => {
    let value = event.target.value;
    value = typeof value === 'string' ? value.split(',') : value;
    changeFilters(property, value)
    setSomeValue(value);
  };

  return (
    <div className='filter'>
      <FormControl sx={{ my: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={someValue}
          onChange={handleChange}
          input={<OutlinedInput label={name} />}
          renderValue={(selected: string[]) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {values.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={someValue.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};