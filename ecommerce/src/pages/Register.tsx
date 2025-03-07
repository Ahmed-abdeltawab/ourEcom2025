import useRegister from "@hooks/useRegister";
import { Navigate } from "react-router-dom";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import { t } from "i18next";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    formErrors,
    emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    emailOnBlurHandler,
  } = useRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Heading title={t("register")} />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label={t("first name")}
              name="firstName"
              register={register}
              error={formErrors.firstName?.message}
            />
            <Input
              label= {t("last name")}
              name="lastName"
              register={register}
              error={formErrors.lastName?.message}
            />
            <Input
              label={t("email")}
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                formErrors.email?.message
                  ? formErrors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking" ? true : false}
            />
            <Input
              type="password"
              label={t("password")}
              name="password"
              register={register}
              error={formErrors.password?.message}
            />
            <Input
              type="password"
              label={t("confirm password")}
              name="confirmPassword"
              register={register}
              error={formErrors.confirmPassword?.message}
            />
            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus === "checking"
                  ? true
                  : false || loading === "pending"
              }
            >
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

export default Register;