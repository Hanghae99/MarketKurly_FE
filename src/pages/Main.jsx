import React from "react";

import Banner from "../components/main/Banner";
import Recommend from "../components/main/Recommend";
import SmallBanner from "../components/main/SmallBanner";
import Item from "../components/shared/Item";
import { Grid, Text } from "../elements";
import { RESP } from "../shared/banner";

const Main = (props) => {
  const item_list = RESP.itemList;
  return (
    <>
      <Banner />
      <Recommend />
      <SmallBanner />
      <Text
        size="28px"
        width="1050px"
        margin="0 auto 27px auto"
        textAlign="center"
        lineHeight="1.15"
        letterSpacing="-.26px"
        bold="500"
        text="마켓컬리 MD추천"
        padding="32px 0 0 0"
      />
      <Grid gridBox width="1050px" margin="0 auto">
        {item_list.map((v, i) => {
          return (
            <div key={i}>
              <Item {...v} />
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Main;
