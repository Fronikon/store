import './FiltersSection.css';
import { ChangeFiltersType, ChangeSortType, FiltersType } from '../../../types/types';
import { SortProducts } from './SortProducts/SortProducts';
import { Filters } from './Filters/Filters';

type PropsType = {
  changeFilters: ChangeFiltersType
  changeSort: ChangeSortType
  filters: FiltersType | null
}

export const FiltersSection: React.FC<PropsType> = ({changeFilters, changeSort, filters}) => {
  return (
    <section className="search">
      <div className="container search__container">
        <div className='search__controls'>
          <button className="search__settings button"></button>
          <input className="search__field" type="text" placeholder="Search guitar..." />
          <button className="search__button button"></button>
          <SortProducts
            changeSort={changeSort}
          />
        </div>
        <Filters
          changeFilters={changeFilters}
          filters={filters}
        />
      </div>
    </section>
  );
};