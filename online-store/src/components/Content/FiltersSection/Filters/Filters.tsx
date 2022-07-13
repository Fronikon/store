import './Filters.css';
import { ChangeFiltersType, FiltersType } from '../../../../types/types';
import { FilterByRange } from './FilterByRange';
import { FilterByProperty } from './FilterByProperty';
import { FilterByPopular } from './FilterByPopular';

type PropsType = {
  changeFilters: ChangeFiltersType
  filters: FiltersType | null
}

const manufacturers = ['TERRIS', 'Homage', 'Fante', 'Belucci']
const colors = ['Classic', 'White', 'Red', 'Black']
const frets = ['18', '19', '20', '21', '22']

export const Filters: React.FC<PropsType> = ({ changeFilters, filters }) => {
  return (
    <div className="filters">
      <div className='filters__category'>
        <FilterByRange
          changeFilters={changeFilters}
          name={'Count'}
          property={'count'}
          min={1}
          max={100}
          initialValue={filters?.count || [1, 100]}
        />
        <FilterByRange
          changeFilters={changeFilters}
          name={'Year'}
          property={'year'}
          min={1999}
          max={2022}
          initialValue={filters?.year || [1999, 2022]}
        />
      </div>
      <div className='filters__category'>
        <FilterByProperty
          name={'Manufacturer'}
          property={'manufacturer'}
          values={manufacturers}
          changeFilters={changeFilters}
        />
        <FilterByProperty
          name={'Color'}
          property={'color'}
          values={colors}
          changeFilters={changeFilters}
        />
        <FilterByProperty
          name={'Frets'}
          property={'fretsCount'}
          values={frets}
          changeFilters={changeFilters}
        />
        <FilterByPopular
          property={'isPopular'}
          changeFilters={changeFilters}
        />
      </div>
    </div>
  );
};