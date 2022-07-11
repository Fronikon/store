import './Filter.css';
import { ProductsDataType } from '../../../types/types';
import { SortProducts } from './SortProducts/SortProducts';

type PropsType = {
  productsData: ProductsDataType[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsDataType[]>>
}

export const Filter: React.FC<PropsType> = ({productsData, setProducts}) => {
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
      </div>
    </section>
  );
};