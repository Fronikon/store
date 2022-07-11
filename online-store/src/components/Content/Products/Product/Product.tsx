import { OpenAlertType, ProductsDataType, ProductsInCartType, SetCounterProductType } from '../../../../types/types';
import './Product.css';
import { useState, useEffect } from 'react';

type TProps = {
  productData: ProductsDataType
  setCounterProduct: SetCounterProductType
  isCartFull: boolean
  productsInCart: ProductsInCartType
  openAlert: OpenAlertType
}

export const Product: React.FC<TProps> = ( {productData, setCounterProduct, isCartFull, productsInCart, openAlert} ) => {

  const [countProductInCart, setCountProductInCart] = useState(0);

  useEffect(() => {
    setCountProductInCart(productsInCart[productData.id] || 0);
  }, [productsInCart, productData.id]);

  const increaseCount = (): void => {
    const newCount = countProductInCart + 1;
    setCounterProduct({...productsInCart, [productData.id]: newCount});
  };

  const decreaseCount = (): void => {
    const newCount = countProductInCart - 1;
    setCounterProduct({...productsInCart, [productData.id]: newCount});
  };

  return (
    <div className={"products__item" + (productData.isPopular ? ' popular' : '')}>
      <img
        alt="Product"
        className="products__item-image"
        src={require(`../../../../assets/products/${productData.imgName}.png`)}
      />
      <div className="products__item-info">
        <h3 className="products__item-title">{productData.name}</h3>
        <ul className="products__item-features">
          <li>Manufacturer: {productData.name}</li>
          <li>Year of release: {productData.manufacturer}</li>
          <li>Color: {productData.color}</li>
          <li>Count: {productData.count}</li>
          <li>Frets: {productData.fretsCount}</li>
        </ul>
        {
          countProductInCart > 0 ? 
          (
            <div className='control'>
              <button
                onClick={decreaseCount}
                className="control__count-changer button"
              >-</button>
              <span className='control__count-product'>{countProductInCart}</span>
              <button
                onClick={!isCartFull ? increaseCount : openAlert}
                className={"control__count-changer button" + (isCartFull ? ' disabled-button' : '')}
              >+</button>
            </div>
          ) :
          (
            <button
              onClick={!isCartFull ? increaseCount : openAlert}
              className={"add-to-cart button" + (isCartFull ? ' disabled-button' : '')} 
            >Add to cart</button>
          )
        }


      </div>
    </div>
  );
};