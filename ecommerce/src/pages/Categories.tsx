import useCategories from "@hooks/useCategories";
import { Category } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { TCategory } from "@types";
import { useTranslation } from "react-i18next";
const Categories = () => {
  const { loading, error, records } = useCategories();
  const {t} = useTranslation();
  return (
    <>
      <Heading title = {t("category")}/>
      <Loading status={loading} error={error} type="category">
        <GridList<TCategory>
          emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
};
export default Categories;