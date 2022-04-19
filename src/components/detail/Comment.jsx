import React from "react";
import styled from "styled-components";

const Comment = () => {
  return (
    <>
      <OneComment>
        <CommentData
          style={{
            width: "65px",
            textAlign: "center",
            paddingRight: "18px",
          }}
        >
          2583
        </CommentData>
        <CommentData
          style={{
            paddingLeft: "50px",
            paddingRight: "250px",
            width: "600px",
            textAlign: "left",
          }}
        >
          맛살 무쌈 맛있어요
        </CommentData>
        <CommentData
          style={{
            width: "51px",
            textAlign: "center",
          }}
        ></CommentData>
        <CommentData
          style={{
            width: "77px",
            textAlign: "left",
          }}
        >
          연재몬
        </CommentData>
        <CommentData
          style={{
            paddingRight: "14px",
            width: "100px",
            textAlign: "center",
          }}
        >
          2022-08-14
        </CommentData>
        <CommentData
          style={{
            paddingRight: "4px",
            width: "40px",
            textAlign: "center",
          }}
        >
          0
        </CommentData>
        <CommentData
          style={{
            width: "80px",
            textAlign: "center",
          }}
        >
          0
        </CommentData>
      </OneComment>
      {/* {clickComment && (
        <CommentDetail> */}
      {/* <DetailWrap>
            <DetailTitle>{props.productName}</DetailTitle>
            {props.file ? <DetailImage src={props.file} /> : null}
            <Detail>{props.comment}</Detail>
          </DetailWrap> */}

      {/* <HelpWrap>
            <HelpButton onClick={helpReview}>
              도움이 돼요 {props.helpCount}
            </HelpButton>
          </HelpWrap>
          <DeleteWrap>
            {userId === props.uid ? (
              <DeleteButton onClick={deleteReview}>삭제하기</DeleteButton>
            ) : null}
          </DeleteWrap> */}
      {/* </CommentDetail>
      )} */}
    </>
  );
};

export default Comment;

const OneComment = styled.div`
  color: #4c4c4c;
  display: flex;
  font-weight: 400;
  font-size: 12px;
  border-bottom: 1px solid #e2e2e2;
  margin-top: 20px;
`;

const CommentData = styled.div`
  padding: 0 0px 23px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
