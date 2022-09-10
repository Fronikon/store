import './FiltersSection.css';
import { ChangeFiltersType, ChangeSearchValueType, ChangeSortType, FiltersType } from '../../../types/types';
import { SortProducts } from './SortProducts/SortProducts';
import { Filters } from './Filters/Filters';
import { SearchField } from './SearchField/SearchField';
import { useState, memo } from 'react';

type PropsType = {
  changeFilters: ChangeFiltersType
  changeSort: ChangeSortType
  sort: string
  changeSearchValue: ChangeSearchValueType
  filters: FiltersType
  clearFilters: () => void
}

export const FiltersSection: React.FC<PropsType> = memo(({changeFilters, changeSort, sort, changeSearchValue, filters, clearFilters}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);

  return (
    <section className="search">
      <div className="container search__container">
        <div className='search__controls'>
          <button
            className="search__settings button"
            onClick={ () => setIsFiltersOpen(!isFiltersOpen) }
          ></button>
          <SearchField changeSearchValue={changeSearchValue} />
          <SortProducts
            changeSort={changeSort}
            sort={sort}
          />
        </div>
        {
          isFiltersOpen
          && 
          <Filters
            changeFilters={changeFilters}
            filters={filters}
            clearFilters={clearFilters}
        />
        }
      </div>
    </section>
  );
});