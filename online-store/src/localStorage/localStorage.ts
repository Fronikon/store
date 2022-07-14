import { FiltersType, ProductsInCartType } from "../types/types";

export const getProductsInCartStorage = (): ProductsInCartType => {
  const gotProductsInCart = localStorage.getItem('productsInCart');
  return gotProductsInCart !== null ? JSON.parse(gotProductsInCart) : {};
};

export const setProductsInCartStorage = (productsInCart: ProductsInCartType): void => {
  localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
};

export const removeProductsInCartStorage = (): void => {
  localStorage.removeItem('productsInCart');
};

export const setFiltersStorage = (filters: FiltersType | null) => {
  if (filters !== null) {
    localStorage.setItem('filtersProducts', JSON.stringify(filters));
  } else {
    removeFiltersStorage();
  }
  localStorage.setItem('filtersProducts', JSON.stringify(filters));
};

export const getFiltersStorage = (): FiltersType | null => {
  const resolve = localStorage.getItem('filtersProducts');
  return resolve !== null ? JSON.parse(resolve) : null;
};

export const removeFiltersStorage = (): void => {
  localStorage.removeItem('filtersProducts');
};

export const setSortStorage = (sort: string | null): void => {
  if (sort !== null) {
    localStorage.setItem('sortProducts', sort);
  } else {
    localStorage.removeItem('sortProducts');
  }
};

export const getSortStorage = (): string | null => {
  return localStorage.getItem('sortProducts');
};
