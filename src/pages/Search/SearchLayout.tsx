import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
const SearchLayout = () => {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <Outlet />
    </>
  );
};

export default SearchLayout;
