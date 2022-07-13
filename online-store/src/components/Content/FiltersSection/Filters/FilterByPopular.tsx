import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { ChangeFiltersType } from '../../../../types/types';

type PropsType = {
  property: string
  changeFilters: ChangeFiltersType
}

export const FilterByPopular: React.FC<PropsType> = ({property, changeFilters}) => {
  const [isPopular, setIsPopular] = useState<boolean>(false);

  const handleChange = () => {
    changeFilters(property, isPopular)
    setIsPopular(!isPopular);
  };

  return (
    <div className='filter'>
      <FormControlLabel control={<Checkbox onChange={handleChange} checked={isPopular} />} label="Only popular" />
    </div>
  );
};