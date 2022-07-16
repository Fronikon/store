import './Filters.css';
import { ChangeFiltersType, FiltersType } from '../../../../types/types';
import { FilterByRange } from './FilterByRange';
import { FilterByProperty } from './FilterByProperty';
import { FilterByPopular } from './FilterByPopular';
import { memo } from 'react';
import { PROPERTIES_FILTERS } from '../../../../data/filtersData';
import { FilterName, FilterProperty, FilterRangeMax, FilterRangeMin } from '../../../../types/enums';

type PropsType = {
  changeFilters: ChangeFiltersType
  filters: FiltersType
  clearFilters: () => void
}

export const Filters: React.FC<PropsType> = memo(({ changeFilters, filters, clearFilters }) => {

  const clearLocalStorage = (): void => {
    window.onunload = (): void => localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <div className="filters">
        <div className='filters__category'>
          <FilterByRange
            changeFilters={changeFilters}
            name={FilterName.count}
            property={FilterProperty.count}
            min={FilterRangeMin.count}
            max={FilterRangeMax.count}
            initialValue={filters.count}
          />
          <FilterByRange
            changeFilters={changeFilters}
            name={FilterName.year}
            property={FilterProperty.year}
            min={FilterRangeMin.year}
            max={FilterRangeMax.year}
            initialValue={filters.year}
          />
        </div>
        <div className='filters__category'>
          <FilterByProperty
            name={FilterName.manufacturer}
            property={FilterProperty.manufacturer}
            values={PROPERTIES_FILTERS.manufacturers}
            changeFilters={changeFilters}
            initialValue={filters.manufacturer}
          />
          <FilterByProperty
            name={FilterName.color}
            property={FilterProperty.color}
            values={PROPERTIES_FILTERS.colors}
            changeFilters={changeFilters}
            initialValue={filters.color}
          />
          <FilterByProperty
            name={FilterName.frets}
            property={FilterProperty.frets}
            values={PROPERTIES_FILTERS.frets}
            changeFilters={changeFilters}
            initialValue={filters.fretsCount}
          />
          <FilterByPopular
            property={FilterProperty.isOnlyPopular}
            changeFilters={changeFilters}
            initialValue={filters.isOnlyPopular}
          />
        </div>
      </div>
      <div className='reset-buttons'>
        <button onClick={clearFilters} className='reset-filters button'>Reset filters</button>
        <button onClick={clearLocalStorage} className='reset-all button'>Reset Local Storage</button>
      </div>
    </div>
  );
});