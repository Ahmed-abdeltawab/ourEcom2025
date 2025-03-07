import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const theme = useAppSelector((state) => state.theme.mode);
  const { t } = useTranslation();

  return (
    <footer
      className={styles.footerContainer}
      style={{
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#f7f7fa",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <div className={styles.footerLinks}>
        <a href="/about-us">{t("aboutus")}</a>
        <a href="/contact">{t("contact")}</a>
        <a href="/terms">{t("terms")}</a>
        <a href="/privacy">{t("privacy")}</a>
      </div>

      <div className={styles.socialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>

    
      <div className={styles.newsletter}>
        <p>{t("Subscribe to our Newsletter for the latest deals")}</p>
        <input type="email" placeholder={t("Enter your email")} />
        <button>{t("subscribe")}</button>
      </div>

    
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} {t("All rights reserved. Your eCommerce Brand")}
      </p>
    </footer>
  );
};

export default Footer;
