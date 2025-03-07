import { useTranslation } from 'react-i18next';
import { useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={`about-us-container ${mode}-mode`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      <section className={`hero-section text-center py-5 ${mode}-bg-primary`}> 
        <div className="container position-relative">
          <h1 className="display-3 fw-bold mb-3 fade-in">{t('about.heroTitle')}</h1>
          <p className="lead tagline fade-in delay-1">{t('about.heroSubtitle')}</p>
          <div className="overlay"></div>
        </div>
      </section>

      <section className={`mission-section py-5 ${mode}-bg-secondary`}>
        <div className="container text-center">
          <h2 className="section-title mb-4 slide-in-left">{t('about.missionTitle')}</h2>
          <p className="mission-text lead slide-in-right">{t('about.missionContent', { year: 2023 })}</p>
        </div>
      </section>

      <section className={`values-section py-5 ${mode}-bg-secondary`}>
        <div className="container">
          <h2 className="section-title text-center mb-5 fade-in">{t('about.valuesTitle')}</h2>
          <div className="row g-4">
            {['quality', 'sizing', 'sustainability'].map((value, index) => (
              <div key={value} className="col-md-4">
                <div className={`value-card text-center p-4 h-100 shadow-sm ${mode}-card zoom-in delay-${index}`}> 
                  <i className={`fas fa-${value === 'quality' ? 'tshirt' : value === 'sizing' ? 'heart' : 'leaf'} value-icon mb-3`}></i>
                  <h3 className="value-title mb-3">{t(`about.${value}Title`)}</h3>
                  <p className="value-text">{t(`about.${value}Content`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`cta-section py-5 ${mode}-bg-primary text-${mode}-contrast`}>
        <div className="container text-center">
          <h2 className="section-title mb-4 pop-in">{t('about.ctaTitle')}</h2>
          <p className="cta-text lead mb-5 fade-in delay-2">{t('about.ctaContent')}</p>
          <button onClick={() => navigate("/categories")}  className={`btn btn-${mode === 'dark' ? 'light' : 'dark'} btn-lg px-5 py-3 explore-btn pulse`}>{t('about.exploreBtn')}</button>
        </div>
      </section>

      <section className={`team-section py-5 ${mode}-bg-light`}>
        <div className="container text-center">
          <h2 className="section-title mb-4 fade-in">{t('about.teamTitle')}</h2>
          <p className="team-text lead mb-5 fade-in delay-1">{t('about.teamContent')}</p>
          <button className={`btn btn-outline-${mode === 'dark' ? 'light' : 'dark'} btn-lg px-5 py-3 team-btn grow-on-hover`}>{t('about.teamBtn')}</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
