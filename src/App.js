import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Content from "./component/Content/Content";
import Copied from "./component/Copied/Copied";
import Sidebar from "./component/Sidebar/Sidebar";
import { copiedActions } from "./store/store";

function App() {
  const showCopied = useSelector((state) => state.store.showCopied);
  console.log(showCopied)
  const dispatch = useDispatch()

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
      <Sidebar />
      <Content />
    </Fragment>
  );
}

export default App;
