import styles from "./Search.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { copiedActions } from "../../store/store";

const Search = (props) => {
  const dispatch = useDispatch();

  const addSearch = (e) => {
    dispatch(copiedActions.setSearch(e.target.value));
  };
  return (
    <div className={styles.search}>
      <div className={styles.icon}>
        <IoSearchOutline></IoSearchOutline>
      </div>
      <input
        type="text"
        onChange={(e) => addSearch(e)}
        placeholder="Search Brand"
      />
    </div>
  );
};
export default Search;
