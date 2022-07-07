import './global.css'
import { productsData } from './data';
import { ProductsDataType } from './types/types';

function drawProducts(data: ProductsDataType[]) {
  const fragment = document.createDocumentFragment() as DocumentFragment;
  const productItemTemp = document.querySelector('#productItemTemp') as HTMLTemplateElement;

  data.forEach((item: ProductsDataType) => {
      const productClone = productItemTemp.content.cloneNode(true) as DocumentFragment;

      const fillProductClone = (id: string, content: string | number): void => {
        const productCloneItem = productClone.querySelector(id) as HTMLElement
        productCloneItem.textContent = String(content);
      }

      const image = productClone.querySelector('#productImage') as HTMLImageElement
      image.src = require(`./assets/products/${item.imgName}.png`);

      fillProductClone('#productTitle', item.name)
      fillProductClone('#productManufacturer', item.manufacturer)
      fillProductClone('#productReleased', item.year)
      fillProductClone('#productColor', item.color)
      fillProductClone('#productCount', item.count)
      fillProductClone('#productFretsCount', item.fretsCount)

      if (item.isPopular) {
        const product = productClone.querySelector('#productsItem') as HTMLElement;
        product.classList.add('popular')
      }

      fragment.append(productClone);
  });

  const products = document.querySelector('#productsItems') as HTMLElement;

  products.append(fragment);
}

drawProducts(productsData)