import styles from "./Search.module.css";
import { IoSearchOutline } from "react-icons/io5";

const Search = (props) => {
  return (
    <div className={styles.search}>
      <div className={styles.icon}>
        <IoSearchOutline></IoSearchOutline>
      </div>
      <input type="text" placeholder="Search Brand" />
    </div>
  );
};
export default Search;
