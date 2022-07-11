import './Content.css';
import { Filter } from './Filter/Filter';
import { Products } from './Products/Products';
import { productsData } from '../../productsData';
import { ProductsInCartType, SetCounterProductType } from '../../types/types';

type PropsType = {
  setCounterProduct: SetCounterProductType
  isCartFull: boolean
  productsInCart: ProductsInCartType
}

export const Content: React.FC<PropsType> = ({setCounterProduct, isCartFull, productsInCart}) => {
  return (
    <div className="content">
      <Filter />
      <Products
        productsData={productsData}
        setCounterProduct={setCounterProduct}
        isCartFull={isCartFull}
        productsInCart={productsInCart}
      />
    </div>
  );
};