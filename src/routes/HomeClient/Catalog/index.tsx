import "./style.css";

/* Components */
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import CatalogNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
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
};

const Catalog = () => {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
        </div>
        <CatalogNextPage />
      </section>
    </main>
  );
};

export default Catalog;
