import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { copiedActions } from "../../store/store";
import styles from "./NavMenu.module.css";

const NavMenu = (props) => {
  const [cssMethod, setCssMethod] = useState("");

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

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `brands.${cssMethod}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
    
  }, [cssMethod]);

  

  const clearSelected = () => {
    dispatch(copiedActions.clearSelected());
  };
  const giveLink = () => {
    const titles = selected.map((item) => item.slug).join(",");
    prompt("Here's the URL to share", `https://brandcolors-clone-project.web.app/collection/${titles}`);
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
      <div className={`${styles.noDownload}  ${styles.icon}`}>
        <IoMdDownload />
        <select onChange={(e) => setCssMethod(e.target.value)} >
          <option value=""></option>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
      </div>
      <div className={`${styles.noShare}  ${styles.icon}`} onClick={giveLink}>
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
