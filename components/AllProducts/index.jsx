import earPhones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import ProductCategory from "./ProductCategory";

const AllProducts = ({ handleMenu }) => {
  return (
    <div className="px-[2.4rem] sm:flex sm:justify-between sm:gap-[1rem] sm:px-[4rem] lg:gap-[3rem]  xl:px-[16.5rem]">
      <ProductCategory
        categoryImg={headPhones}
        categoryTitle="HEADPHONES"
        handleMenu={handleMenu}
      />
      <ProductCategory
        categoryImg={speakers}
        categoryTitle="SPEAKERS"
        handleMenu={handleMenu}
      />
      <ProductCategory
        categoryImg={earPhones}
        categoryTitle="EARPHONES"
        handleMenu={handleMenu}
      />
    </div>
  );
};

export default AllProducts;
