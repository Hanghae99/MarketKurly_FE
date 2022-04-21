import React from "react";
import Detail from "../components/detail/Detail";
import Review from "../components/detail/Review";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const DetailPage = (props) => {
  const name = useSelector((state) => state.product.list[0].name);
  const params = useParams();
  const productId = params.id;

  return (
    <>
      <Detail />
      <Review productId={productId} name={name} />
    </>
  );
};

export default DetailPage;
