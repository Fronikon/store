import './Filters.css';
import { ChangeFiltersType, FiltersType } from '../../../../types/types';
import { FilterByRange } from './FilterByRange';
import { FilterByProperty } from './FilterByProperty';
import { FilterByPopular } from './FilterByPopular';
import { memo } from 'react';
import { PROPERTIES_FILTERS } from '../../../../data/filtersData';

type PropsType = {
  changeFilters: ChangeFiltersType
  filters: FiltersType
  clearFilters: () => void
}

export const Filters: React.FC<PropsType> = memo(({ changeFilters, filters, clearFilters }) => {

  const clearLocalStorage = () => {
    window.onunload = () => {
      localStorage.clear();
    };
    window.location.reload();
  };

  return (
    <div>
      <div className="filters">
        <div className='filters__category'>
          <FilterByRange
            changeFilters={changeFilters}
            name={'Count'}
            property={'count'}
            min={1}
            max={100}
            initialValue={filters.count}
          />
          <FilterByRange
            changeFilters={changeFilters}
            name={'Year'}
            property={'year'}
            min={1999}
            max={2022}
            initialValue={filters.year}
          />
        </div>
        <div className='filters__category'>
          <FilterByProperty
            name={'Manufacturer'}
            property={'manufacturer'}
            values={PROPERTIES_FILTERS.manufacturers}
            changeFilters={changeFilters}
            initialValue={filters.manufacturer}
          />
          <FilterByProperty
            name={'Color'}
            property={'color'}
            values={PROPERTIES_FILTERS.colors}
            changeFilters={changeFilters}
            initialValue={filters.color}
          />
          <FilterByProperty
            name={'Frets'}
            property={'fretsCount'}
            values={PROPERTIES_FILTERS.frets}
            changeFilters={changeFilters}
            initialValue={filters.fretsCount}
          />
          <FilterByPopular
            property={'isOnlyPopular'}
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