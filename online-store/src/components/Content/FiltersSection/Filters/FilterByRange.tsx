import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { ChangeFiltersType } from '../../../../types/types';

type PropsType = {
  changeFilters: ChangeFiltersType
  name: string
  property: string
  min: number
  max: number
  initialValue: number[]
}

export const FilterByRange: React.FC<PropsType> = ({changeFilters, name, property, min, max, initialValue}) => {
  const [value, setValue] = useState<number[]>([initialValue[0], initialValue[1]]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    changeFilters(property, newValue)
    setValue(newValue as number[]);
  };

  return (
    <div className='filter'>
      <h3 className='filter__title'>{name}:</h3>
      <div className='filter__wrapper'>
        <div className='filter__display'>{value[0]}</div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
        />
        <div className='filter__display'>{value[1]}</div>
      </div>
    </div>
  );
};