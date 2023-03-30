import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { copiedActions } from "../../store/store";

const NavMenu = (props) => {
  const brandNumbers = useSelector((state) => state.store.selected);
  const dispatch = useDispatch();
  const clearSelected = () => {
    dispatch(copiedActions.clearSelected());
  };
  //to={`/collection/${selectedBrands.join(",")}`}
  return (
    <Fragment>
        
      <div >
        <IoLinkOutline></IoLinkOutline>
      </div>

      <div onClick={clearSelected}>
        {" "}
        <IoMdClose></IoMdClose>
      </div>
      <div> {brandNumbers.length} brands collected </div>
    </Fragment>
  );
};
export default NavMenu;
