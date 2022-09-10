export type ProductsDataType = {
  id: number,
  imgName: string,
  name: string,
  manufacturer: string,
  year: number,
  color: string,
  count: number,
  fretsCount: number,
  isPopular: boolean
}

export type FiltersType = {
  count: number[]
  year: number[]
  manufacturer: string[]
  color: string[]
  fretsCount: string[]
  isOnlyPopular: boolean
}

export type ProductsInCartType = {
  [index: string]: number
}

export type СhangeProductsCountType = () => void
export type OpenAlertType = () => void
export type SetCounterProductType = (product: ProductsInCartType | null) => void
export type ChangeFiltersType = <Type>(name: string, option: Type) => void
export type ChangeSortType = (method: string) => void
export type ChangeSearchValueType = (value: string) => void
