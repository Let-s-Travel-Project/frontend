import SelectButton from "@/components/common/SelectButton";
import React from "react";
const IndexPage: React.FunctionComponent = () => {
  const sectors = [
    "일본/중국/대만",
    "동남아(베트남/태국/말레이)",
    "북미(미국/캐나다)",
    "유럽(서유럽, 동유럽, 북유럽)",
  ];

  return (
    <>
      <ul
        id="selectWrapper"
        className="flex max-sm:flex-col max-sm:gap-1 justify-around items-center"
      >
        {sectors.map((sector, index) => (
          <li key={index}>
            <SelectButton id={index}>{sector}</SelectButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;
