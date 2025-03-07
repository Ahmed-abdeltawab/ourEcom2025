import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";
import { NavLink } from "react-router-dom";
import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import ThemeToggle from "./ThemeToggle";
import styles from "./styles.module.css";

const { headerContainer, headerLogo } = styles;

const Header = () => {
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.auth);
  const { mode } = useAppSelector((state) => state.theme);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang).then(() => {
      localStorage.setItem("language", newLang);
      document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
    });
  };

  return (
    <header>
      <div
        className={headerContainer}
        style={{
          flexDirection: isArabic ? "row-reverse" : "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
      
        <div className={headerLogo} style={{ order: isArabic ? 2 : 1 }}>
          <h1>
            <span>{t("our")}</span> <Badge bg="info">{t("ecom")}</Badge>
          </h1>
        </div>

      
        <div
          className="d-flex align-items-center gap-4" 
          style={{
            order: isArabic ? 1 : 2, 
            flexDirection: isArabic ? "row-reverse" : "row", 
          }}
        >
          <ThemeToggle />
          <HeaderLeftBar /> 
          <button
            onClick={toggleLanguage}
            className="ms-3" 
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontWeight: "bold",
              color: mode === "dark" ? "#FFF" : "#000",
            }}
          >
            {isArabic ? "🌍 English" : "🌍 عربي"}
          </button>
        </div>
      </div>

      
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100 d-flex justify-content-between">
              <Nav className={isArabic ? "ms-auto" : "me-auto"}>
                <Nav.Link as={NavLink} to="/">{t("home")}</Nav.Link>
                <Nav.Link as={NavLink} to="categories">{t("categories")}</Nav.Link>
                <Nav.Link as={NavLink} to="about-us">{t("aboutus")}</Nav.Link>
              </Nav>

              <Nav className={isArabic ? "me-auto" : "ms-auto"}>
                {accessToken ? (
                  <NavDropdown
                    title={`${t("welcome")}: ${user?.firstName} ${user?.lastName}`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={NavLink} to="profile">{t("profile")}</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="profile/orders">{t("orders")}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="/" onClick={() => dispatch(authLogout())}>
                      {t("logout")}
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <Nav.Link as={NavLink} to="login">{t("login")}</Nav.Link>
                    <Nav.Link as={NavLink} to="register">{t("register")}</Nav.Link>
                  </>
                )}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
