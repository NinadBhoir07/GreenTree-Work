import ImageContainer from "../components/ImageContainer";
import ProductContainer from "./ProductContainer";

const ProductSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row top-0 pt-4">
      <div className="w-full lg:w-1/2">
        <ImageContainer />
      </div>
      <div className="w-full lg:w-1/2">
        <ProductContainer />
      </div>
    </div>
  );
};

export default ProductSection;
