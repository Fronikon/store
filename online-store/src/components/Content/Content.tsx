import './Content.css';
import { Filter } from './Filter/Filter';
import { Products } from './Products/Products';
import { productsData } from '../../productsData';

export const Content: React.FC = () => {
  return (
    <div className="content">
      <Filter />
      <Products productsData={productsData}/>
    </div>
  );
};