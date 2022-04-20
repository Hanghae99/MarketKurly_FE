import React from "react";

import styled from "styled-components";

const Comment = (props) => {
  console.log(props);
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
          {props.commentId}
        </CommentData>
        <CommentData
          style={{
            paddingLeft: "50px",
            paddingRight: "250px",
            width: "600px",
            textAlign: "left",
          }}
        >
          {props.comment}
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
          {props.nickname}
        </CommentData>
        <CommentData
          style={{
            paddingRight: "14px",
            width: "100px",
            textAlign: "center",
          }}
        >
          {props.createdAt}
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
