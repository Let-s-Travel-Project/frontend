import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
const SearchLayout = () => {
  return (
    <>
      <SearchBar />
      <hr className="bg-gray-500 max-sm:h-[1px] h-[1.5px] opacity-40 mx-2 my-4" />
      <Outlet />
    </>
  );
};

export default SearchLayout;
