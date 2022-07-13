import './FiltersSection.css';
import { ChangeFiltersType, FiltersType, ProductsDataType } from '../../../types/types';
import { SortProducts } from './SortProducts/SortProducts';
import { Filters } from './Filters/Filters';

type PropsType = {
  productsData: ProductsDataType[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsDataType[]>>
  changeFilters: ChangeFiltersType
  filters: FiltersType | null
}

export const FiltersSection: React.FC<PropsType> = ({productsData, setProducts, changeFilters, filters}) => {
  return (
    <section className="search">
      <div className="container search__container">
        <div className='search__controls'>
          <button className="search__settings button"></button>
          <input className="search__field" type="text" placeholder="Search guitar..." />
          <button className="search__button button"></button>
          <SortProducts
            productsData={productsData}
            setProducts={setProducts}
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