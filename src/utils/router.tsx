import IndexPage from "@/pages/Search/IndexPage";
import RootLayout from "@/pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import SearchLayout from "@/pages/Search/SearchLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // 검색창이 있는 페이지
      {
        path: "/",
        element: <SearchLayout />,
        children: [
          {
            index: true,
            element: <IndexPage />,
          },
        ],
      },
    ],
  },
]);
