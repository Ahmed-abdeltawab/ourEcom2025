import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const theme = useAppSelector((state) => state.theme.mode);
  const {t } = useTranslation();
  return (
    <div
      className={styles.footerContainer}
      style={{
        backgroundColor: theme === "dark" ? "#222" : "#f7f7fa",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
    {t( "footer")}
    </div>
  );
};

export default Footer;
