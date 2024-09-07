import SelectButton from "@/components/common/SelectButton";

interface SelectSectorContainerProps {
  data: string[];
}

const SelectSectorContainer: React.FunctionComponent<
  SelectSectorContainerProps
> = ({ data }) => {
  return (
    <ul
      id="selectWrapper"
      className="flex max-sm:flex-col max-sm:gap-1 justify-around items-center "
    >
      {data.map((sector, index) => (
        <li key={index}>
          <SelectButton id={index}>{sector}</SelectButton>
        </li>
      ))}
    </ul>
  );
};

export default SelectSectorContainer;
