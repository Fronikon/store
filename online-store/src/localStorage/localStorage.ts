import { FiltersType, ProductsInCartType } from "../types/types";

type setValueType = ProductsInCartType | FiltersType | string

class LocalStorageControll {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public get() {
    const resolve = localStorage.getItem(this.name);
    return resolve !== null ? JSON.parse(resolve) : null;
  }
  public set(value: setValueType) {
    localStorage.setItem(this.name, JSON.stringify(value));
  }
  public remove() {
    localStorage.removeItem(this.name);
  }
}

export const productsInCartInStorage = new LocalStorageControll('productsInCart');
export const filtersInStorage = new LocalStorageControll('filtersProducts');
export const sortInStorage = new LocalStorageControll('sortProducts');
