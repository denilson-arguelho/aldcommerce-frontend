import "./style.css";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import * as productServices from "../../../services/product-services";
import { useParams } from "react-router-dom";

/* const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Essa TV é muito Bonita",
  imgUrl:
    "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.0,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
}; */

const ProductDetails = () => {
  const params = useParams();

  const product = productServices.findById(Number(params.productId));
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonSecondary text="Inicio" />
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
