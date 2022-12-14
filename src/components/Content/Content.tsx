import './Content.css';
import { FiltersSection } from './FiltersSection/FiltersSection';
import { Products } from './Products/Products';
import { ChangeFiltersType, ChangeSearchValueType, ChangeSortType, FiltersType, ProductsDataType, ProductsInCartType, SetCounterProductType } from '../../types/types';
import { useState, useEffect, memo } from 'react';
import { PRODUCTS_DATA } from '../../data/productsData';
import { INITIAL_FILTERS } from '../../data/filtersData';
import { sortInStorage, filtersInStorage } from './../../localStorage/localStorage';

type PropsType = {
  setCounterProduct: SetCounterProductType
  isCartFull: boolean
  productsInCart: ProductsInCartType
}

export const Content: React.FC<PropsType> = memo(({ setCounterProduct, isCartFull, productsInCart }) => {

  const [products, setProducts] = useState<ProductsDataType[]>(PRODUCTS_DATA);
  const [filters, setFilters] = useState<FiltersType>(INITIAL_FILTERS);
  const [sort, setSort] = useState<string>('none');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const sortResponse: string | null = sortInStorage.get();
    if (sortResponse !== null) setSort( sortResponse );

    const filtersResponse: FiltersType | null = filtersInStorage.get();
    if (filtersResponse !== null) setFilters( filtersResponse );
  }, []);

  useEffect(() => {
    window.onunload = () => {
      filtersInStorage.set(filters);
      sortInStorage.set(sort);
    };
  }, [sort, filters]);

  useEffect(() => {
    let newProducts: ProductsDataType[] = PRODUCTS_DATA.filter((product) => {
      if (product.count < filters.count[0] || product.count > filters.count[1]) return false;
      if (product.year < filters.year[0] || product.year > filters.year[1]) return false;

      if (filters.manufacturer.length !== 0 &&
        !filters.manufacturer.includes(product.manufacturer)) return false;
      if (filters.color.length !== 0 &&
        !filters.color.includes(product.color)) return false;
      if (filters.fretsCount.length !== 0 &&
        !filters.fretsCount.includes(String(product.fretsCount))) return false;

      if (filters.isOnlyPopular && !product.isPopular) return false;
      return true;
    });

    if (search !== '') {
      newProducts = newProducts.filter((product) => {
        const name = product.name.match(/\w/g)?.join('').toLowerCase();
        const searchName = search.match(/\w/g)?.join('').toLowerCase();
        if (name && searchName) {
          return name?.includes(searchName);
        }
        return false;
      });
    }

    switch (sort) {
      case 'nameUp': {
        newProducts = [...newProducts].sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        break;
      }
      case 'nameDown': {
        newProducts = [...newProducts].sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        break;
      }
      case 'yearUp': {
        newProducts = [...newProducts].sort((a, b) => a.year - b.year);
        break;
      }
      case 'yearDown': {
        newProducts = [...newProducts].sort((a, b) => a.year - b.year).reverse();
        break;
      }
    }

    setProducts(newProducts);
  }, [filters, sort, search]);

  const changeFilters: ChangeFiltersType = (name, option) => setFilters( { ...filters, [name]: option } );
  const changeSort: ChangeSortType = (method) => setSort(method);
  const changeSearchValue: ChangeSearchValueType = (value) => setSearch(value);

  const clearFilters = (): void => {
    setFilters(INITIAL_FILTERS);
  };

  return (
    <div className="content">
      <FiltersSection
        changeFilters={changeFilters}
        changeSort={changeSort}
        sort={sort}
        changeSearchValue={changeSearchValue}
        filters={filters}
        clearFilters={clearFilters}
      />
      <Products
        products={products}
        setCounterProduct={setCounterProduct}
        isCartFull={isCartFull}
        productsInCart={productsInCart}
      />
    </div>
  );
});