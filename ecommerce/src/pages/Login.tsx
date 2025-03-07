import { Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Row, Col, Alert, Spinner } from "react-bootstrap";
import { t } from "i18next";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title={t("login")} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="success">
             {t("login message")}
            </Alert>
          )}

          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              {t("success")}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              name="email"
              label={t("email")}
              register={register}
              error={formErrors.email?.message}
            />
            <Input
              type="password"
              name="password"
              label={t("password")}
              register={register}
              error={formErrors.password?.message}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                t("submit")
              )}
            </Button>

            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;