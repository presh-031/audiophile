import headPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import ProductCategory from "./ProductCategory";

const AllProducts = () => {
  return (
    <div className="px-[2.4rem]">
      <ProductCategory categoryImg={headPhones} categoryTitle="HEADPHONES" />
      <ProductCategory categoryImg={speakers} categoryTitle="SPEAKERS" />
      <ProductCategory categoryImg={earPhones} categoryTitle="EARPHONES" />
    </div>
  );
};

export default AllProducts;
