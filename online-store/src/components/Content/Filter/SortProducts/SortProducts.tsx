import './SortProducts.css';
import { useState } from 'react';
import { ProductsDataType } from '../../../../types/types';

type PropsType = {
  productsData: ProductsDataType[]
  setProducts: React.Dispatch<React.SetStateAction<ProductsDataType[]>>
}

export const SortProducts: React.FC<PropsType> = ({ productsData, setProducts }) => {
  const [selectValue, setselectValue] = useState('None')

  const sortProducts = (sort: string, data: ProductsDataType[]): ProductsDataType[] => {

    switch (sort) {
      case 'nameUp': {
        return [...data].sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        })
      }
      case 'nameDown': {
        return [...data].sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        })
      }
      case 'yearUp': {
        return [...data].sort((a, b) => a.year - b.year)
      }
      case 'yearDown': {
        return [...data].sort((a, b) => a.year - b.year).reverse()
      }
      default: {
        return data
      }
    }
  }

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setselectValue(event.target.value)
    setProducts(sortProducts(event.target.value, productsData))
  }

  return (
    <div>
      <select className='sort' value={selectValue} onChange={onChange}>
        <option value="None">None</option>
        <option value="nameUp">Name ↑</option>
        <option value="nameDown">Name ↓</option>
        <option value="yearUp">Year ↑</option>
        <option value="yearDown">Year ↓</option>
      </select>
    </div>
  );
};