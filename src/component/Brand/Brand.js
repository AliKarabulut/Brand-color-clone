import { useEffect, useState } from "react";
import Clipboard from "react-clipboard.js";
import { useDispatch, useSelector } from "react-redux";
import { BsCheck2 } from "react-icons/bs";
import { getContrastYIQ } from "../../helper";
import { copiedActions } from "../../store/store";
import styles from "./Brand.module.css";

const Brand = ({ brand }) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(false);
  const selected = useSelector((state) => state.store.selected);

  const dispatch = useDispatch();

  const addCopied = (props) => {
    dispatch(copiedActions.addCopied(props));
    dispatch(copiedActions.toggleShowCopied(true));
  };

  useEffect(() => {
    if (selected.includes(brand)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);

  const addColorList = () => {
    setShow(!show)
    dispatch(copiedActions.toggleSelected(brand));
  };

  useEffect(() => {
    const date = new Date(brand.modified);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const formattedDate = `${year}/${month}/${day}`;
    setDate(formattedDate)


  }, [])
  

  return (
    <article onClick={addColorList} className={styles.brandWrapper}>
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
          <span>Updated {date}</span>
          <span>
            <a href={brand.brand_url} target="_blank">
              Brand URL
            </a>
          </span>
          <span>
            <a href={brand.source_url} target="_blank">
              Source URL
            </a>
          </span>
        </footer>
      )}
    </article>
  );
};
export default Brand;
