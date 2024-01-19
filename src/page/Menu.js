import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productList);

  if (!productData || !filterby) {
    return null;
  }

  const productDisplay = productData.find((el) => el._id === filterby);

  if (!productDisplay) {
    return <div>Product not found</div>;
  }

  const handleAddCartProduct = (e) => {
    e.stopPropagation();
    dispatch(addCartItem(productDisplay));
  };

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm overflow-hidden w-full p-5">
          {productDisplay.image && (
            <img
              src={productDisplay.image}
              className="hover:scale-105 transition-all h-full"
            />
          )}
        </div>
      </div>
      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;
