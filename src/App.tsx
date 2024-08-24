import { FC } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./utils/router";
import { queryClient } from "./utils/http";
import { RouterProvider } from "react-router-dom";

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
