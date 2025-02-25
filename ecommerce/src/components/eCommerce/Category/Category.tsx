import { TCategory } from "@types";
import { Link } from "react-router-dom";
import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
const Category = ({ title, img, prefix }: TCategory) => {
  const mode = useAppSelector((state) => state.theme.mode); 
 const { i18n } = useTranslation();
 const lang = i18n.language;
  return (
    <div className={styles.category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={styles.categoryImg}>
          <img src={img} alt={title.en} />
        </div>
        <h4 className={`${styles.categoryTitle} ${mode === "dark" ? styles.darkTitle : ""}`}>
          { lang === "ar" ? title.ar : title.en  }
        </h4>
      </Link>
    </div>
  );
};

export default Category;
