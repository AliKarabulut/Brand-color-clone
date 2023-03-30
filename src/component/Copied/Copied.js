import { useSelector } from "react-redux";
import { getContrastYIQ } from "../../helper";
import styles from "./Copied.module.css";

const Copied = (props) => {
  const copied = useSelector((state) => state.store.copied);

  return (
    <div
      className={styles.copied}
      style={{
        "--bgCopiedColor": `#${copied}`,
        "--textColor": `${getContrastYIQ(copied)}`,
      }}
    >
      Copied #{copied} to clipboard
    </div>
  );
};
export default Copied;
