import Search from "../Search/Seach";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <Search></Search>
    </div>
  );
};
export default Navbar;
