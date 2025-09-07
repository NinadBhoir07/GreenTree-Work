import Header from "./components/Header";
import ProductSection from "./sections/ProductSection";
import ProductCardSection from "./sections/ProductCardSection";
import Footer from "./components/Footer";
import ProductBreadcrumb from "./sections/ProductBreadcrumb";

function App() {
  return (
    <>
      <Header />
      <ProductBreadcrumb />
      <ProductSection />
      <ProductCardSection />
      <Footer />
    </>
  );
}

export default App;
