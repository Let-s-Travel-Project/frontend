interface MainLogoWithTxtProps {}

const MainLogoWithTxt: React.FunctionComponent<MainLogoWithTxtProps> = () => {
  return (
    <div className="flex justify-center items-center sm:px-4 sm:py-2 gap-2">
      <img src="logo.png" alt="main logo" className="w-12 rounded-sm" />
      <span className="text-signitureBlue text-3xl max-sm:hidden">
        LetsTravel
      </span>
    </div>
  );
};

export default MainLogoWithTxt;
