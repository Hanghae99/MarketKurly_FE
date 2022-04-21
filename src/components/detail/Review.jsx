import styled from "styled-components";

import Comment from "./Comment";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCommentDB } from "../../redux/modules/comment";

const Review = ({ productId, name }) => {
  const post_list = useSelector((state) => state.comment.commentList);
  const comment = useSelector((state) => state.comment);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentDB(productId));
  }, [productId]);

  return (
    <>
      <Total>
        <div>
          <Form>
            <Title>
              <Name>PRODUCT REVIEW</Name>

              <Content>
                <Li>
                  상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과
                  다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                </Li>
                <Li>
                  배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리
                  내1:1 문의에 남겨주세요.
                </Li>
              </Content>
            </Title>
            <HeaderInfo>
              <Info
                style={{
                  width: "70px",
                  textAlign: "center",
                }}
              >
                번호
              </Info>
              <Info
                style={{
                  width: "592px",
                  textAlign: "center",
                }}
              >
                제목
              </Info>
              <Info
                style={{
                  width: "51px",
                  textAlign: "center",
                }}
              ></Info>
              <Info
                style={{
                  width: "77px",
                  textAlign: "left",
                }}
              >
                작성자
              </Info>
              <Info
                style={{
                  width: "100px",
                  textAlign: "center",
                }}
              >
                작성일
              </Info>
              <Info
                style={{
                  width: "40px",
                  textAlign: "center",
                }}
              >
                도움
              </Info>
              <Info
                style={{
                  width: "80px",
                  textAlign: "center",
                }}
              >
                조회
              </Info>
            </HeaderInfo>
            <div>
              {post_list.map((item, idx) => {
                return <Comment name={name} key={idx} {...item} />;
              })}
            </div>
          </Form>
        </div>
      </Total>
      <Reg>
        <Btn
          onClick={() => {
            history.push(`${productId}/write`);
          }}
        >
          후기쓰기
        </Btn>
      </Reg>
    </>
  );
};

export default Review;

const Reg = styled.div`
  display: block;
  width: 100px;
  height: 40px;
  text-align: center;
  background-color: #795b8f;
  border: 1px solid #5f0080;
  margin-left: 1290px;
  cursor: pointer;
`;

const Btn = styled.button`
  color: #fff;
  border-style: none;
  background-color: #795b8f;
  padding: 10px;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
`;

const Total = styled.div`
  width: 1000px;
  margin: 50px auto;
  padding-top: 20px;
  display: flex;
`;
const Form = styled.form`
  font-weight: 400;
  letter-spacing: 0;
`;

const HeaderInfo = styled.div`
  width: 100%;
  height: 65.8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  border-top: 2px solid #522772;
  margin: 15px 0;
`;

const Info = styled.div`
  padding: 25px 0px 23px 0;
  line-height: 140%;
  letter-spacing: 0px;
  vertical-align: middle;
  font-size: 13px;
  color: #353535;
`;

const Title = styled.div`
  font-weight: 300;
  letter-spacing: 0;
  color: #4c4c4c;
  font-size: 12px;
`;

const Name = styled.h2`
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 5px;
`;

const Content = styled.div`
  position: relative;
  font-weight: 200;
  letter-spacing: 0;
`;

const Li = styled.li`
  width: 100%;
`;
