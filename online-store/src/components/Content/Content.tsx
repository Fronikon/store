import './Content.css';
import { FiltersSection } from './FiltersSection/FiltersSection';
import { Products } from './Products/Products';
import { productsData } from '../../productsData';
import { ChangeFiltersType, ChangeSortType, FiltersType, ProductsInCartType, SetCounterProductType } from '../../types/types';
import { useState, useEffect } from 'react';

type PropsType = {
  setCounterProduct: SetCounterProductType
  isCartFull: boolean
  productsInCart: ProductsInCartType
}

export const Content: React.FC<PropsType> = ({ setCounterProduct, isCartFull, productsInCart }) => {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState<FiltersType | null>(null);
  const [sort, setSort] = useState<string | null>(null);

  useEffect(() => {
    let newProducts = productsData;

    if (filters) {
      newProducts = productsData.filter((product) => {
        if (filters.count !== undefined) {
          if (product.count < filters.count[0] || product.count > filters.count[1]) return false;
        }
        if (filters.year !== undefined) {
          if (product.year < filters.year[0] || product.year > filters.year[1]) return false;
        }

        if (filters.manufacturer !== undefined) {
          if (filters.manufacturer.length !== 0) {
            if (!filters.manufacturer.includes(product.manufacturer)) return false;
          }
        }
        if (filters.color !== undefined) {
          if (filters.color.length !== 0) {
            if (!filters.color.includes(product.color)) return false;
          }
        }
        if (filters.fretsCount !== undefined) {
          if (filters.fretsCount.length !== 0) {
            if (!filters.fretsCount.includes(String(product.fretsCount))) return false;
          }
        }

        if (filters.isPopular !== undefined) {
          if (!filters.isPopular && !product.isPopular) return false;
        }
        return true;
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
  }, [filters, sort]);


  const changeFilters: ChangeFiltersType = (name, option) => {
    let newFilters: FiltersType = { [name]: option };
    if (filters) newFilters = { ...filters, [name]: option };
    setFilters(newFilters);
  };

  const changeSort: ChangeSortType = (method) => {
    setSort(method);
  };

  return (
    <div className="content">
      <FiltersSection
        changeFilters={changeFilters}
        changeSort={changeSort}
        filters={filters}
      />
      <Products
        products={products}
        setCounterProduct={setCounterProduct}
        isCartFull={isCartFull}
        productsInCart={productsInCart}
      />
    </div>
  );
};