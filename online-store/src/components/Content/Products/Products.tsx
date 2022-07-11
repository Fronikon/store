import './Products.css';
import { Product } from './Product/Product';
import { OpenAlertType, ProductsDataType, ProductsInCartType, SetCounterProductType } from '../../../types/types';
import { useState } from 'react';

type PropsType = {
  productsData: ProductsDataType[]
  setCounterProduct: SetCounterProductType
  isCartFull: boolean
  productsInCart: ProductsInCartType
}

export const Products: React.FC<PropsType> = ({productsData, setCounterProduct, isCartFull, productsInCart}) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const openAlert: OpenAlertType = () => {
    setIsAlertOpen(true);
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 2000);
  };

  return (
    <section className="products">
      {
        isAlertOpen && <div className='alert-products-full'>Sorry, all slots are full</div>
      }
      <div className="container products__container">
        <div className="products__title-container">
          <h2 className="products__title">Products</h2>
        </div>
        <div className="products__items">
          {
            productsData.map( (productData: ProductsDataType): React.ReactElement => {
              return <Product
                key={productData.id}
                productData={productData}
                setCounterProduct={setCounterProduct}
                isCartFull={isCartFull}
                productsInCart={productsInCart}
                openAlert={openAlert}
              />;
            })
          }
        </div>
      </div>
    </section>
  );
};