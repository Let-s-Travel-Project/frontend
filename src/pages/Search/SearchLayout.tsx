import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
const SearchLayout = () => {
  return (
    <>
      <div className="mt-10 mb-6">
        <SearchBar />
      </div>
      <Outlet />
    </>
  );
};

export default SearchLayout;
