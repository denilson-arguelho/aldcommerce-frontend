import "./style.css";

/* Components */
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import CatalogNextPage from "../../../components/ButtonNextPage";
/* Importando todas as funçoes do product-services */
import * as productService from "../../../services/product-services";

const Catalog = () => {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {productService.findAll().map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <CatalogNextPage />
      </section>
    </main>
  );
};

export default Catalog;
