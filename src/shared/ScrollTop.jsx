import React, { useRef } from "react";
import styled from "styled-components";

const ScrollTop = (props) => {
  const btnRef = useRef();

  const scrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  // useEffet를 써야하나??...잘안먹히네
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1000 && window.innerWidth > 1000) {
      btnRef.current.style.opacity = 1;
      btnRef.current.style.bottom = "30px";
    } else {
      btnRef.current.style.opacity = 0;
      btnRef.current.style.bottom = "0px";
    }
  });

  return <ScrollBtn onClick={scrollTop} ref={btnRef} />;
};

const ScrollBtn = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: 300;
  right: 31px;
  width: 58px;
  height: 58px;
  background: url("https://res.kurly.com/pc/service/common/1903/btn_pagetop_v2.png")
    no-repeat 50% 50%;
  font-size: 0;
  line-height: 0;
  text-indent: -9999px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: url("https://res.kurly.com/pc/service/common/1903/btn_pagetop_hover.png")
      no-repeat 50% 50%;
  }
`;

export default ScrollTop;
