import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { t } from "i18next";

const { headerLeftBar, iconDark } = styles; 

const HeaderLeftBar = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const wishlistTotalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length
  );
  const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <div className={headerLeftBar}>
      <HeaderCounter
        to="wishlist"
        title={t("wishlist")}
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistIcon title="wishlist" className={mode === "dark" ? iconDark : ""} />}
      />
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
