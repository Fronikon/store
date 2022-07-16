import { Checkbox, FormControlLabel } from '@mui/material';
import { useState, useEffect, memo } from 'react';
import { ChangeFiltersType } from '../../../../types/types';

type PropsType = {
  property: string
  changeFilters: ChangeFiltersType
  initialValue: boolean
}

export const FilterByPopular: React.FC<PropsType> = memo(({property, changeFilters, initialValue}) => {
  const [isOnlyPopular, setIsOnlyPopular] = useState<boolean>(initialValue);

  useEffect(() => {
    setIsOnlyPopular(initialValue);
  }, [initialValue]);

  const handleChange = (): void => {
    changeFilters<boolean>(property, !isOnlyPopular);
    setIsOnlyPopular(!isOnlyPopular);
  };

  return (
    <div className='filter'>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            checked={isOnlyPopular}
          />
        }
        label="Only popular"
      />
    </div>
  );
});