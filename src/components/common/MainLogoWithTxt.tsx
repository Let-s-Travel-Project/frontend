interface MainLogoWithTxtProps {}

const MainLogoWithTxt: React.FunctionComponent<MainLogoWithTxtProps> = () => {
  return (
    <div className="flex justify-center items-center sm:px-4 sm:py-2 gap-2">
      <img
        src="logo.png"
        alt="main logo"
        className="w-12 md:w-14 md:rounded-sm rounded-sm"
      />
      <span className="text-signitureBlue text-2xl max-sm:hidden max-md:text-xl pr-2">
        LetsTravel
      </span>
    </div>
  );
};

export default MainLogoWithTxt;
