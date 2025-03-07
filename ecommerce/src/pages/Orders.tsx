import useOrders from "@hooks/useOrders";
import { useAppSelector } from "@store/hooks"; 
import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import { Productinfo } from "@components/eCommerce";
import { Table, Modal } from "react-bootstrap";
import styles from "../components/eCommerce/orders/styles.module.css"; 
import { t } from "i18next";
const Orders = () => {
  const mode = useAppSelector((state) => state.theme.mode); 

  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton className={mode === "dark" ? styles.modalDark : ""}>
          <Modal.Title>{t("product details")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={mode === "dark" ? styles.modalDark : ""}>
          {selectedProduct.map((el) => (
            <Productinfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>

      <Heading title={t("orders")} />
      <Loading status={loading} error={error} type="table">
        <Table>
          <thead>
            <tr>
              <th>{t("order number")}</th>
              <th>{t("items")}</th>
              <th>{t("total price")}</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((el) => (
              <tr key={el.id}>
                <td>#{el.id}</td>
                <td>
                  {el.items.length} {t("item")}
                  {" / "}
                  <span
                    onClick={() => viewDetailsHandler(el.id)}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("product details")}
                  </span>
                </td>
                <td>{el.subtotal.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Loading>
    </>
  );
};

export default Orders;
