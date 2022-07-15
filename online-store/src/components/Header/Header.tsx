import './Header.css';
import { Cart } from './Cart/Cart';
import { SetCounterProductType } from '../../types/types';
import { memo } from 'react';

type PropsType = {
  countProductsInCart: number
  setCounterProduct: SetCounterProductType
}

export const Header: React.FC<PropsType> = memo(({countProductsInCart, setCounterProduct}) => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <div className="header__img"></div>
          <h1 className="header__title">Guitar-store</h1>
        </div>
        <Cart
          countProductsInCart={countProductsInCart}
          setCounterProduct={setCounterProduct}
        />
      </div>
    </header>
  );
});