import './Products.css';
import { Product } from './Product/Product';
import { ProductsDataType } from '../../../types/types';

type PropsType = {
  productsData: ProductsDataType[]
}

export const Products: React.FC<PropsType> = ({productsData}) => {
  return (
    <section className="products">
      <div className="container products__container">
        <div className="products__title-container">
          <h2 className="products__title">Products</h2>
        </div>
        <div className="products__items" id="productsItems">
          {
            productsData.map( (productData: ProductsDataType, index: number): React.ReactElement => {
              return <Product key={index} data={productData}/>;
            })
          }
        </div>
      </div>
    </section>
  );
};