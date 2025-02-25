import useWishlist from "@hooks/useWishlist";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import { t } from "i18next";
const Wishlist = () => {
  const { loading, error, records } = useWishlist();

  return (
    <>
      <Heading title={t("your wishlist")} />
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage={t("empty wishlist")}
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;