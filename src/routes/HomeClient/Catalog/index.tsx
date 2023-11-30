import "./style.css";

/* Components */
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import CatalogNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

import * as productService from "../../../services/product-services";

type QueryParams = {
  page: number;
  name: string;
};

export default function Catalog() {
  
  const [isLatPage, setIsLatPage] = useState(false)
  
  const [product, setProduct] = useState<ProductDTO[]>([]);

  const [queryParams, setqueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProduct(product.concat(nextPage));
        setIsLatPage(response.data.last)
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProduct([]);
    setqueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNexPageClick() {
    setqueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {product.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        {
          !isLatPage &&
          <div onClick={handleNexPageClick}>
            <CatalogNextPage />
          </div>
        }
      </section>
    </main>
  );
}
