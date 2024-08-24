import IndexPage from "@/pages/IndexPage";
import RootLayout from "@/pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
    ],
  },
]);
