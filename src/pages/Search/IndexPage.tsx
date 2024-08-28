import React from "react";
import SelectSectorArea from "./SelectSectorArea";
const IndexPage: React.FunctionComponent = () => {
  const sectors = [
    "일본/중국/대만",
    "동남아(베트남/태국/말레이)",
    "북미(미국/캐나다)",
    "유럽(서유럽, 동유럽, 북유럽)",
  ];

  return (
    <>
      <SelectSectorArea data={sectors} />
    </>
  );
};

export default IndexPage;
