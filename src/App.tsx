import { cards, transactions } from "config";
import { Layout } from "layouts";
import { Dashboard, Transaction } from "pages";
import { useLayoutEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { setCards, setTransactions } from "redux/slices";
import { useAppDispatch } from "redux/store/hooks";

function App() {
  const dispatch = useAppDispatch();

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

  useLayoutEffect(() => {
    dispatch(setTransactions(transactions));
    dispatch(setCards(cards));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
