import { useState } from "react";
import Clipboard from "react-clipboard.js";
import { useDispatch, useSelector } from "react-redux";
import { BsCheck2 } from "react-icons/bs";
import { getContrastYIQ } from "../../helper";
import { copiedActions } from "../../store/store";
import styles from "./Brand.module.css";

const Brand = ({ brand }) => {
  const [show, setShow] = useState(false);
  const showCopied = useSelector((state) => state.store.search);

  const dispatch = useDispatch();

  const addCopied = (props) => {
    dispatch(copiedActions.addCopied(props));
    dispatch(copiedActions.toggleShowCopied(true));
  };

  const addColorList = () => {
    setShow(!show);

    dispatch(copiedActions.toggleSelected(brand.title));
    console.log(showCopied);
  };

  return (
    <article
      onClick={addColorList}
      className={`${styles.brandWrapper} ${
        show === true ? styles.selected : ""
      }`}
    >
      {show && (
        <div className={styles.check}>
          <BsCheck2 />
        </div>
      )}
      <div className={styles.brandMain}>
        <header className={styles.brandHeader}>
          <h1 className={styles.brandTitle}> {brand.title}</h1>
        </header>
        <ol className={styles.brandColors}>
          {brand.colors.map((item, key) => {
            return (
              <li
                className={`${styles.list}  ${
                  show === true ? styles.listd1 : styles.listd2
                }`}
                key={key}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Clipboard
                  component="button"
                  data-clipboard-text={item}
                  onSuccess={() => addCopied(item)}
                  style={{
                    "--bgColor": `#${item}`,
                    "--textColor": `${getContrastYIQ(item)}`,
                  }}
                >
                  {item}
                </Clipboard>
              </li>
            );
          })}
        </ol>
      </div>
      {show && (
        <footer className={styles.brandFooter}>
          <span>tarih</span>
          <span>link</span>
          <span>link</span>
          <span>link</span>
        </footer>
      )}
    </article>
  );
};
export default Brand;
