import './App.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useState, useEffect, memo } from 'react';
import { getProductsInCartStorage, removeProductsInCartStorage, setProductsInCartStorage } from './localStorage/localStorage';
import { SetCounterProductType } from './types/types';

export const App: React.FC = memo(() => {
  const [productsInCart, setProductsInCart] = useState( getProductsInCartStorage() );
  const [countProductsInCart, setCountProductsInCart] = useState(0);
  const [isCartFull, setIsCartFull] = useState(false);

  const setCounterProduct: SetCounterProductType = (products) => {
    if (products) {
      setProductsInCartStorage(products);
    } else {
      removeProductsInCartStorage();
    }
    setProductsInCart( getProductsInCartStorage() );
  };

  useEffect(() => {
    const count = Object.values(productsInCart).reduce((prew, cur) => (prew + cur), 0);
    getProductsInCartStorage();
    setCountProductsInCart(count);
    setIsCartFull(count === 20);
  }, [productsInCart]);

  return (
    <div>
      <Header
        countProductsInCart={countProductsInCart}
        setCounterProduct={setCounterProduct}
      />
      <Content
        setCounterProduct={setCounterProduct}
        isCartFull={isCartFull}
        productsInCart={productsInCart}
      />
      <Footer />
    </div>
  );
});
