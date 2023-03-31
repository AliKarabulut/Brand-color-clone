import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Navbar from "../Navbar/Navbar";
import BrandsData from "../../brands.json";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { copiedActions } from "../../store/store";
import styles from "./Collection.module.css";

const Collection = (props) => {
  const params = useParams();
  const ids = params.id.split(",");
  const dispatch = useDispatch();

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const brandsArray = Object.values(BrandsData);
    const filteredBrands = brandsArray.filter((item) =>
      ids.includes(item.slug)
    );
    setBrands(filteredBrands);

    filteredBrands.map((item) => dispatch(copiedActions.toggleSelected(item)));
    
  }, []);
  
  return (
    <div className={styles.collection}>
      <Navbar />
      <div>
        {brands.map((item) => (
          <Brand brand={item} />
        ))}
      </div>
    </div>
  );
};
export default Collection;
