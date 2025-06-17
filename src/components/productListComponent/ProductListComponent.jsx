import Container from "../commonLayouts/Container";
import ProductListLeftSide from "./ProductListLeftSide";
import ProductListRightSide from "./ProductListRightSide";

const ProductListComponent = () => {
  return (
    <div className="mt-16 mb-20">
      <Container>
        <div className="flex justify-between gap-x-[26px] ">
          <ProductListLeftSide />
          <ProductListRightSide />
        </div>
      </Container>
    </div>
  );
};

export default ProductListComponent;
