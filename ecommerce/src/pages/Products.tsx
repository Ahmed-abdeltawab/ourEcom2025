import useProducts from "@hooks/useProducts";
import { GridList } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import useCategories from "@hooks/useCategories";

const Products = () => {
  const { loading, error , productsFullInfo } = useProducts();
  const {records: categories} = useCategories();
  console.log(categories[0]?.title.ar);
  return (
    <>
      {/* <Heading title={`${productPrefix?.toUpperCase()} Products`} /> */}
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Products;