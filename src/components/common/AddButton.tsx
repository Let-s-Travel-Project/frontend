import AddButtonImg from "@/assets/AddButton.png";

const AddButton = () => {
  return (
    <button className="fixed bottom-8 right-0  rounded-full h-30 px-0 mx-0 hover:opacity-80">
      <img src={AddButtonImg} alt="Add Button" className="w-1/2" />
    </button>
  );
};

export default AddButton;
