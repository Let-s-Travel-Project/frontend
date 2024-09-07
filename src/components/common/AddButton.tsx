import { Button } from "@/lib/utils/ui/button";
import AddButtonImg from "@/assets/AddButton.png";

const AddButton = () => {
  return (
    <Button
      variant="ghost"
      className="fixed bottom-8 right-0  rounded-full h-30 px-0 mx-0"
    >
      <img src={AddButtonImg} alt="Add Button" className="w-1/2" />
    </Button>
  );
};

export default AddButton;
