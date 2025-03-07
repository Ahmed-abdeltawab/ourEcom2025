import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const { headerLeftBar, iconDark } = styles; 

const HeaderLeftBar = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const wishlistTotalQuantity = useAppSelector((state) => state.wishlist.itemsId.length);
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      className={headerLeftBar}
      style={{
        flexDirection: isArabic ? "row-reverse" : "row", 
        gap: "16px", 
      }}
    >
      <HeaderCounter
        to="wishlist"
        title={t("wishlist")}
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistIcon title="wishlist" className={mode === "dark" ? iconDark : ""} />}
      />

      <span className="divider">|</span> 

      <HeaderCounter
        to="cart"
        title={t("cart")}
        totalQuantity={cartTotalQuantity}
        svgIcon={<CartIcon title="cart" className={mode === "dark" ? iconDark : ""} />}
      />
    </div>
  );
};

export default HeaderLeftBar;
