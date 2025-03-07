import { LottieHandler } from "@components/feedback";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { t } from "i18next";

const Error = () => {
  return (
    <Container>
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "15%" }}
      >
        <LottieHandler type="notFound" />
        <Link to="/" replace={true}>
          {t("How about going back to safety?")}
        </Link>
      </div>
    </Container>
  );
};

export default Error;
