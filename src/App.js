import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collection from "./component/Collection/Collection";
import Content from "./component/Content/Content";
import Copied from "./component/Copied/Copied";
import RootLayout from "./pages/root";
import { copiedActions } from "./store/store";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Content /> },
      { path: "collection/:id", element: <Collection /> },
    ],
  },
]);

function App() {
  const showCopied = useSelector((state) => state.store.showCopied);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(copiedActions.toggleShowCopied(false));
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showCopied]);

  return (
    <Fragment>
      {showCopied && <Copied />}
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
