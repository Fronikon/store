import { Checkbox, FormControlLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import { ChangeFiltersType } from '../../../../types/types';

type PropsType = {
  property: string
  changeFilters: ChangeFiltersType
  initialValue: boolean
}

export const FilterByPopular: React.FC<PropsType> = ({property, changeFilters, initialValue}) => {
  const [isOnlyPopular, setIsOnlyPopular] = useState<boolean>(initialValue);

  useEffect(() => {
    setIsOnlyPopular(initialValue);
  }, [initialValue]);

  const handleChange = () => {
    changeFilters(property, !isOnlyPopular);
    setIsOnlyPopular(!isOnlyPopular);
  };

  return (
    <div className='filter'>
      <FormControlLabel control={<Checkbox onChange={handleChange} checked={isOnlyPopular} />} label="Only popular" />
    </div>
  );
};