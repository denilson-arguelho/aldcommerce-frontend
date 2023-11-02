import './style.css'

import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Essa TV é muito Bonita",
  imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.00,
  categories: [
    {
      id: 2,
      name:"Eletrônicos"
    },
    {
      id: 3,
      name:"Computadores"
    }
  ]
}

const ProductDetails = () => {
  return (
    <div>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product}/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonSecondary />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
