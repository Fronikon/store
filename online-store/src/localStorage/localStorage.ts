import { ProductsInCartType } from "../types/types";

export const getProductsInCartStorage = (): ProductsInCartType => {
  const gotProductsInCart = localStorage.getItem('productsInCart');
  return gotProductsInCart !== null ? JSON.parse(gotProductsInCart) : {};
};

export const setProductsInCartStorage = (productsInCart: ProductsInCartType) => {
  localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
};

export const removeProductsInCartStorage = () => {
  localStorage.removeItem('productsInCart');
};
