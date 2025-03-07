import { useEffect, useState, memo } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { addToCart } from "@store/cart/cartSlice";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import ProductInfo from "../ProductInfo/Productinfo";
import { Button, Spinner, Modal } from "react-bootstrap";
import { TProduct } from "@types";
import { t } from "i18next";
import styles from "./styles.module.css";
const {  maximumNotice, wishlistBtn } = styles;

const Product = memo(
  ({
    id,
    title,
    price,
    img,
    max,
    quantity,
    isLiked,
    isAuthenticated,
  }: TProduct) => {
    const dispatch = useAppDispatch();
    const { mode } = useAppSelector((state) => state.theme);

    const [showModal, setShowModal] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const currentRemainingQuantity = max - (quantity ?? 0);

    const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

    useEffect(() => {
      if (!isBtnDisabled) {
        return;
      }

      const debounce = setTimeout(() => {
        setIsBtnDisabled(false);
      }, 300);

      return () => clearTimeout(debounce);
    }, [isBtnDisabled]);

    const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsBtnDisabled(true);
    };

    const likeToggleHandler = () => {
      if (isAuthenticated) {
        if (!isLoading) {
          setIsLoading(true);
          dispatch(actLikeToggle(id))
            .unwrap()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
        }
      } else {
        setShowModal(true);
      }
    };

    return (
      <>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          contentClassName={mode === "dark" ? "bg-dark text-light" : ""}
        >
        <Modal.Header closeButton className={mode === "dark" ? "border-secondary" : ""}>
        <Modal.Title>{t("login required")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {t("login message")}
        </Modal.Body>
        </Modal>

        <ProductInfo title={title} price={price} img={img}>
          <div className={wishlistBtn} onClick={likeToggleHandler}>
            {isLoading ? (
              <Spinner animation="border" size="sm" variant="primary" />
            ) : isLiked ? (
              <LikeFill />
            ) : (
              <Like />
            )}
          </div>
          <p className={maximumNotice}>
            {quantityReachedToMax
              ? t("limit")
              : `${t("you can add")} ${currentRemainingQuantity} ${t("items")}`}
          </p>
          <Button
            variant="info"
            style={{ color: "white", width: "100%" }}
            onClick={addToCartHandler}
            disabled={isBtnDisabled || quantityReachedToMax}
          >
            {isBtnDisabled ? (
              <>
                <Spinner animation="border" size="sm" /> {t("loading")}
              </>
            ) : (
              t("add to cart")
            )}
          </Button>
        </ProductInfo>
      </>
    );
  }
);

export default Product;