import { useAppSelector } from "@store/hooks";
import { Heading } from "@components/common";
import { t } from "i18next";
const Account = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Heading title={t("account info")} />
      <ul>
        <li>{t("first name")}: {accountInfo?.firstName}</li>
        <li>{t("last name")}: {accountInfo?.lastName}</li>
        <li>{t("email")}: {accountInfo?.email}</li>
      </ul>
    </>
  );
};

export default Account;