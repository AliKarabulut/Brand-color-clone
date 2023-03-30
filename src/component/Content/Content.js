import { useState } from "react";
import Brand from "../Brand/Brand";
import Navbar from "../Navbar/Navbar";
import BrandsData from "../../brands.json";
import styles from "./Content.module.css";

const Content = (props) => {
  const brandsArray = [];
  Object.keys(BrandsData).map((item) => {
    brandsArray.push(BrandsData[item]);
  });
  const [brands, setBrands] = useState(brandsArray);

  return (
    <div className={styles.content}>
      <Navbar />
      <div>
        {brands.map((item) => (
          <Brand brand={item} />
        ))}
      </div>
    </div>
  );
};
export default Content;
