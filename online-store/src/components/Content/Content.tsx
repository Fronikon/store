import './Content.css';
import { Filter } from './Filter/Filter';
import { Products } from './Products/Products';
import { productsData } from '../../productsData';
import { ProductsInCartType, SetCounterProductType } from '../../types/types';
import { useState } from 'react';

type PropsType = {
  setCounterProduct: SetCounterProductType
  isCartFull: boolean
  productsInCart: ProductsInCartType
}

export const Content: React.FC<PropsType> = ({setCounterProduct, isCartFull, productsInCart}) => {
  const [products, setProducts] = useState(productsData)

  return (
    <div className="content">
      <Filter
        productsData={productsData}
        setProducts={setProducts}
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