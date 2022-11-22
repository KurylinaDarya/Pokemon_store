import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { loadProductDetails } from "../reducers";
import { productDetailsSelector } from "../../../selectors/index";

import ProductDetails from "../components/index";

const ProductDetailsContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector(productDetailsSelector);

  useEffect(() => {
    dispatch(loadProductDetails(id));
  }, [id, dispatch]);

  return (
    <ProductDetails
      product={productDetails.data}
      isLoading={productDetails.isLoading}
      error={productDetails.error}
    />
  );
};

export default ProductDetailsContainer;
