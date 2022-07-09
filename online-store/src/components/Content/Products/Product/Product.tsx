import { ProductsDataType } from '../../../../types/types';
import './Product.css';

type TProps = {
  data: ProductsDataType
}

export const Product: React.FC<TProps> = ({data}) => {
  return (
    <div className={"products__item" + (data.isPopular ? ' popular' : '')}>
      <img
        alt="Product"
        className="products__item-image"
        src={require(`../../../../assets/products/${data.imgName}.png`)}
      />
      <div className="products__item-info">
        <h3 className="products__item-title">{data.name}</h3>
        <ul className="products__item-features">
          <li>Manufacturer: {data.name}</li>
          <li>Year of release: {data.manufacturer}</li>
          <li>Color: {data.color}</li>
          <li>Count: {data.count}</li>
          <li>Frets: {data.fretsCount}</li>
        </ul>
        <button className="add-to-cart-button button">Add to cart</button>
      </div>
    </div>
  );
};