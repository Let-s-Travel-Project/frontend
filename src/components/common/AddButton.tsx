import AddButtonImg from "@/assets/AddButton.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/lib/utils/ui/dropdown-menu";
const AddButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="fixed bottom-8 right-0  rounded-full h-30 px-0 mx-0 hover:opacity-80">
          <img src={AddButtonImg} alt="Add Button" className="w-1/2" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex justify-evenly items-center gap-2">
          <button>여행추가</button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex justify-evenly items-center gap-2">
          <button>내 여행</button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex justify-evenly items-center gap-2">
          <button>탐색</button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="flex justify-evenly items-center gap-2">
          <button>설정</button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddButton;
