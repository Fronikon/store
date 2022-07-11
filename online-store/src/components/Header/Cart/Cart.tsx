import './Cart.css';
import { SetCounterProductType } from '../../../types/types';

type PropsType = {
  countProductsInCart: number
  setCounterProduct: SetCounterProductType
}

export const Cart: React.FC<PropsType> = ({countProductsInCart, setCounterProduct}) => {
  const clear = () => {
    setCounterProduct(null);
  };

  return (
    <div className='cart'>
        <span className='cart__count'>{countProductsInCart}</span>
        <button
          onClick={clear}
          className='cart__clear button'
        >Clear cart</button>
        <div className="cart__img"></div>
    </div>
  );
};