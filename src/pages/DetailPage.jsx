import { React, useEffect } from "react";
import Detail from "../components/detail/Detail";
import Review from "../components/detail/Review";
import { getCommentDB } from "../redux/modules/comment";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

const DetailPage = (props) => {
  const dispatch = useDispatch();

  const params = useParams();
  const productId = params.id;

  console.log(productId);
  return (
    <>
      <Detail />
      <Review productId={productId} />
    </>
  );
};

export default DetailPage;
