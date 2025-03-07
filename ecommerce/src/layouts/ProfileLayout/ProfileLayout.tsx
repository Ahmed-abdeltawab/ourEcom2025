import { t } from "i18next";
import { Row, Col, ListGroup } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <Row>
      <Col md={3}>
        <ListGroup>
          <ListGroup.Item as={NavLink} to="" end>
            {t("account info")}
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="orders">
            {t("orders")}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default ProfileLayout;