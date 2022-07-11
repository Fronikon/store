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

export type СhangeProductsCountType = () => void
export type OpenAlertType = () => void
export type SetCounterProductType = (product: ProductsInCartType | null) => void

export type ProductsInCartType = {
  [index: string]: number
}

