import './FiltersSection.css';
import { ChangeFiltersType, ChangeSearchValueType, ChangeSortType, FiltersType } from '../../../types/types';
import { SortProducts } from './SortProducts/SortProducts';
import { Filters } from './Filters/Filters';
import { SearchField } from './SearchField/SearchField';

type PropsType = {
  changeFilters: ChangeFiltersType
  changeSort: ChangeSortType
  changeSearchValue: ChangeSearchValueType
  filters: FiltersType | null
}

export const FiltersSection: React.FC<PropsType> = ({changeFilters, changeSort, changeSearchValue, filters}) => {
  return (
    <section className="search">
      <div className="container search__container">
        <div className='search__controls'>
          <button className="search__settings button"></button>
          <SearchField changeSearchValue={changeSearchValue} />
          <SortProducts changeSort={changeSort} />
        </div>
        <Filters
          changeFilters={changeFilters}
          filters={filters}
        />
      </div>
    </section>
  );
};