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
  count?: number[]
  year?: number[]
  manufacturer?: string[]
  color?: string[]
  fretsCount?: string[]
  isPopular?: boolean
}

export type ProductsInCartType = {
  [index: string]: number
}

export type СhangeProductsCountType = () => void
export type OpenAlertType = () => void
export type SetCounterProductType = (product: ProductsInCartType | null) => void
export type ChangeFiltersType = (name: string, option: number[] | string[] | number | string | boolean) => void
