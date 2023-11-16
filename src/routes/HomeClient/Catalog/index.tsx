import "./style.css";

/* Components */
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import CatalogNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

import * as productService from '../../../services/product-services'

export default function Catalog() {


const [product, setProduct] = useState<ProductDTO[]>([]);

useEffect(()=>{
  productService.findAll()
  .then(response => {
    setProduct(response.data.content)
  })
},[])

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {product.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <CatalogNextPage />
      </section>
    </main>
  );
}
