import { React, useEffect } from "react";
import Detail from "../components/detail/Detail";
import Review from "../components/detail/Review";
import { getCommentDB } from "../redux/modules/comment";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const DetailPage = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.product.list[0].name);

  console.log(name);

  const params = useParams();
  const productId = params.id;

  console.log(productId);
  return (
    <>
      <Detail />
      <Review productId={productId} name={name} />
    </>
  );
};

export default DetailPage;
