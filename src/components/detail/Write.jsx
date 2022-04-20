import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { addCommentDB } from "../../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const Write = () => {
  const dispatch = useDispatch();
  const [commentValue, setCommentValue] = useState({
    comment: "",
  });
  const product = useSelector((state) => state.product.list[0]);
  const params = useParams();
  const productId = params.productId;
  console.log(params.productId);

  const onChangeFormValue = (e) => {
    const { name, value } = e.target;

    setCommentValue({
      ...commentValue,
      [name]: value,
    });
    // console.log(commentValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addCommentDB(productId, commentValue));
    console.log(commentValue);
  };

  return (
    <>
      <Section>
        <div>
          <Tit>후기 작성</Tit>
          <Border />
          <Div>
            <Imgurl>
              <img
                style={{
                  width: "200px",
                  height: "250px",
                  margin: "30px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
                src={`${product.imgUrl}`}
                alt="리뷰이미지"
              />
            </Imgurl>
            <div>
              <Name>
                [{product.brand}]{product.name}
              </Name>
            </div>
          </Div>
        </div>
      </Section>

      <BorderLine />
      <Sum>
        <Section>
          <Table>
            <Box>
              <span>제목</span>
            </Box>

            <InputBox>
              <Input type="text" placeholder="제목을 입력해주세요 " />
            </InputBox>
          </Table>

          <div>
            <Table>
              <BigBox>
                <span>후기작성</span>
              </BigBox>

              <InputBox>
                <BigInput
                  type="text"
                  placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 됩니다."
                  name="comment"
                  onChange={onChangeFormValue}
                />
              </InputBox>
            </Table>
          </div>
        </Section>
      </Sum>
      <Reg>
        <Btn onClick={onSubmit}>등록하기</Btn>
      </Reg>
    </>
  );
};

export default Write;

const Section = styled.section`
  width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Div = styled.div`
  display: flex;
`;

const Reg = styled.div`
  display: block;
  width: 200px;
  height: 54px;
  border-radius: 3px;
  font-size: 0;
  text-align: center;
  background-color: #5f0080;
  margin-left: 800px;
`;

const Btn = styled.button`
  color: #fff;
  border-style: none;
  background-color: #5f0081;
  height: 100%;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const Sum = styled.section`
  display: flex;
  justify-content: left;
  align-items: left;
`;

const Tit = styled.h2`
  font-weight: 500;
  color: #333;
  display: flex;
`;

const Table = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 800px;
  height: 50px;
  display: flex;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-top: 1px solid gray;
  padding: 10px;
  outline: none;
`;

const BigInput = styled.textarea`
  border: none;
  width: 800px;
  height: 200px;
  display: flex;
  border: 1px solid gray;
  padding: 11px;
  outline: none;
`;

const InputBox = styled.div``;

const Box = styled.div`
  display: flex;
  background-color: #e2e2e2;
  width: 200px;
  height: 50px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1px solid gray; */
`;

const BigBox = styled.div`
  display: flex;
  background-color: #e2e2e2;
  width: 200px;
  height: 200px;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

const Border = styled.div`
  border-bottom: 2px solid #5f0080;
  padding: 10px;
  width: 900px;
  display: flex;
`;

const BorderLine = styled.div`
  border-bottom: 1px solid #e2e2e2;
  width: 1000px;
  padding: 17px;
  display: flex;
  margin: 0 auto;
`;

const Name = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  padding-right: 500px;
  padding-top: 180px;
`;

const Imgurl = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 300px;
  margin: 30px;
`;
