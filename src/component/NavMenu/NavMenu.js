import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { copiedActions } from "../../store/store";
import styles from "./NavMenu.module.css";

const NavMenu = (props) => {
  const [downloadUrl, setDownloadUrl] = useState();
  const [cssMethod, setCssMethod] = useState("css");
  const selected = useSelector((state) => state.store.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected.length > 0) {
      let output = "";
      switch (cssMethod) {
        case "css":
          output += ":root {\n";
          selected.forEach((brand) => {
            brand.colors.forEach((color, key) => {
              output += `--${brand.slug}-${key}: #${color};\n`;
            });
          });
          output += "}";
          break;

        case "scss":
          selected.forEach((brand) => {
            brand.colors.forEach((color, key) => {
              output += `\$${brand.slug}-${key}: #${color};\n`;
            });
          });
          break;

        case "less":
          selected.forEach((brand) => {
            brand.colors.forEach((color, key) => {
              output += `@${brand.slug}-${key}: #${color};\n`;
            });
          });
          break;

        default:
          break;
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selected, cssMethod]);

  const clearSelected = () => {
    dispatch(copiedActions.clearSelected());
  };
  const giveLink = () => {
    const titles = selected.map((item) => item.slug).join(",");
    prompt("Here's the URL to share", `localhost:3000/collection/${titles}`);
  };

  if (selected.length === 0) {
    return (
      <div className={styles.navMenu}>
        <div className={`${styles.noDownload}  ${styles.noIcon}`}>
          <IoMdDownload />
        </div>
        <div className={`${styles.noShare}  ${styles.noIcon}`}>
          <IoLinkOutline />
        </div>
        <div className={`${styles.noClose}  ${styles.noIcon}`}>
          <IoMdClose />
        </div>
        <div className={styles.noBrandCollected}>0 brands collected</div>
      </div>
    );
  }
  return (
    <div className={styles.navMenu}>
      <select onChange={(e) => setCssMethod(e.target.value)}>
        <option value="css">CSS</option>
        <option value="scss">SCSS</option>
        <option value="less">LESS</option>
      </select>
      <a
        className={`${styles.noDownload}  ${styles.icon}`}
        download={`brands.${cssMethod}`}
        href={downloadUrl}
      >
        <IoMdDownload />
      </a>
      <div
        className={`${styles.noShare}  ${styles.icon}`}
        onClick={giveLink}
      >
        <IoLinkOutline />
      </div>
      <div
        className={`${styles.noClose}  ${styles.icon}`}
        onClick={clearSelected}
      >
        <IoMdClose />
      </div>
      <div className={styles.brandCollected}>
        {selected.length} brands collected
      </div>
    </div>
  );
};
export default NavMenu;
