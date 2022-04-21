import React from "react";
import { useState } from "react";

import styled from "styled-components";

const Comment = (props) => {
  const [oneComment, setOneComment] = useState(false);
  const [number, setNumber] = useState(0);

  const plusNumber = (e) => {
    e.preventDefault();
    setNumber((number) => number + 1);
  };

  if (oneComment) {
  }
  return (
    <>
      <OneComment
        onClick={() => {
          setOneComment(!oneComment);
        }}
      >
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
            marginLeft: "40px",
          }}
        >
          {props.nickname}
        </CommentData>
        <CommentData
          style={{
            paddingRight: "14px",
            width: "100px",
            textAlign: "center",
            marginLeft: "30px",
          }}
        >
          {props.createdAt}
        </CommentData>
        <CommentData
          style={{
            paddingRight: "4px",
            width: "40px",
            textAlign: "center",
            marginLeft: "10px",
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

      {oneComment && (
        <Hidden>
          <TitName>{props.name}</TitName>
          <P> {props.comment}</P>
          <Button onClick={plusNumber}>도움이 돼요 {number}</Button>
        </Hidden>
      )}
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

const Hidden = styled.div`
  display: block;
  width: 1100px;
  height: 100%;
  padding: 30px;
  border-bottom: 1px solid #ececec;
`;

const TitName = styled.div`
  display: block;
  font-weight: 700;
  font-size: 12px;
  color: #514859;
  line-height: 18px;
`;

const P = styled.p`
  padding-top: 30px;
  line-height: 16px;
  color: #4c4c4c;
  font-size: 12px;
`;

const Button = styled.button`
  border: 1px solid #5f0080;
  background-color: #fff;
  display: inline-block;
  color: #5f0080;
  text-align: center;
  width: auto;
  min-width: 75px;
  padding: 0 15px;
  line-height: 28px;
  font-size: 12px;
  margin-left: 930px;
  cursor: pointer;
`;
