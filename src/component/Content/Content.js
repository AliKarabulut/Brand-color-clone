import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Navbar from "../Navbar/Navbar";
import BrandsData from "../../brands.json";
import styles from "./Content.module.css";
import { useSelector } from "react-redux";

const Content = (props) => {
  const search = useSelector((state) => state.store.search);
  const brandsArray = [];
  Object.keys(BrandsData).map((item) => {
    brandsArray.push(BrandsData[item]);
  });

  const [brands, setBrands] = useState(brandsArray);
  
  useEffect(() => {
    setBrands(brandsArray.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

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
