import './App.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { useState, useEffect, memo } from 'react';
import { productsInCartInStorage } from './localStorage/localStorage';
import { ProductsInCartType, SetCounterProductType } from './types/types';

export const App: React.FC = memo(() => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCartType>( {} );
  const [countProductsInCart, setCountProductsInCart] = useState<number>(0);
  const [isCartFull, setIsCartFull] = useState<boolean>(false);

  const setProductFromStorage = (): void => {
    const response: ProductsInCartType | null = productsInCartInStorage.get();
    if (response !== null) {
      setProductsInCart(response);
    } else {
      setProductsInCart( {} );
    }
  };

  useEffect(() => {
    setProductFromStorage();
  }, []); 

  useEffect(() => {
    const count: number = Object.values(productsInCart).reduce((prew, cur) => (prew + cur), 0);
    setCountProductsInCart(count);
    setIsCartFull(count === 20);
  }, [productsInCart]);

  const setCounterProduct: SetCounterProductType = (products) => {
    if (products !== null) {
      productsInCartInStorage.set(products);
    } else {
      productsInCartInStorage.remove();
    }
    setProductFromStorage();
  };

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
