import { ReactNode } from "react";
import { Button } from "@/lib/utils/ui/button";
import { useSectorStore } from "@/store/store";
interface SelectButtonProps {
  id: number;
  children: ReactNode;
}
const SelectButton: React.FunctionComponent<SelectButtonProps> = ({
  id,
  children,
}) => {
  const selectedSector = useSectorStore((state) => state.selectedSector);
  const setSelectedSector = useSectorStore((state) => state.setSelectedSector);
  const onChangeSector = (id: number) => {
    setSelectedSector(id);
  };

  let wrapperCSS =
    "flex rounded-lg gap-1 max-sm:w-screen py-1 px-4 py-2 lg:px-12 py-4 ";

  return (
    <Button
      className={
        id === selectedSector
          ? (wrapperCSS += " border border-signitureBlue")
          : wrapperCSS
      }
      variant="ghost"
      onClick={() => onChangeSector(id)}
    >
      <span className="text-lg font-medium max-sm:text-md lg:text-xl lg:font-semibold">
        {children}
      </span>
    </Button>
  );
};

export default SelectButton;
