import './Cart.css';
import { SetCounterProductType } from '../../../types/types';
import { memo } from 'react';

type PropsType = {
  countProductsInCart: number
  setCounterProduct: SetCounterProductType
}

export const Cart: React.FC<PropsType> = memo(({countProductsInCart, setCounterProduct}) => {
  return (
    <div className='cart'>
        <button
          onClick={(): void => setCounterProduct(null)}
          className='cart__clear button'
        >Clear cart</button>
        <div className="cart__img"><span className='cart__count'>{countProductsInCart}</span></div>
    </div>
  );
});