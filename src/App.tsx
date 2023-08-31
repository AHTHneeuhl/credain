import { Layout } from "layouts";
import { Dashboard, Transaction } from "pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "transaction/:id",
          element: <Transaction />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
