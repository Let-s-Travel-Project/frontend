import MainLogoWithTxt from "@/components/common/MainLogoWithTxt";
import { useState } from "react";
import ProfileLogo from "@/assets/profileLogo.svg";

interface SearchBarProps {}

const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <form
      action=""
      className="flex justify-center items-center w-screen px-4 gap-2"
    >
      <MainLogoWithTxt />
      <label htmlFor="searchInput" className="w-full">
        <span className="hidden">searchInput</span>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          placeholder="도시명 또는 나라명을 검색해보세요"
          id="searchInput"
          className="border border-signitureBlue w-full h-10 sm:h-12 max-sm:mx-2 px-2 rounded-lg"
        />
      </label>
      <img src={ProfileLogo} alt="profile logo" className="mx-2 max-sm:w-10" />
    </form>
  );
};

export default SearchBar;
