import React from "react";
import SEO from "../../components/seo";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { jobListData } from "../../data/joblistData";
import styles from "../../components/Careers/Careers.module.scss";

const Careers = () => {
  return (
    <div className={styles.careersPage}>
      <SEO pageTitle="Карьера в APSOD" />
      <Header />

      {/* Hero Section */}
      <section
        className="breadcrumb__area include-bg pt-140 pb-140 breadcrumb__overlay"
        style={{
          backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-1">
                <h3 className="breadcrumb__title">Карьера в APSOD</h3>
                <div className="breadcrumb__list">
                  <span>
                    <a href="/">Главная</a>
                  </span>
                  <span className="dvdr">
                    <i className="fa-light fa-colon"></i>
                  </span>
                  <span className="tp-current">Карьера</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Вакансии Section */}
      <section className="services__area-2 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper-2 text-center mb-60">
                <span className="section__title-pre-2">Вакансии</span>
                <h3 className={`section__title-2 ${styles.sectionTitleDark}`}>
                  Мы открыты к сотрудничеству
                </h3>
                <p className={styles.sectionSubtitleDark}>
                  Присоединяйтесь к нашей команде и создавайте инновационные
                  решения вместе с нами
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {jobListData.map((job, index) => (
              <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className={`services__item-2 mb-30 transition-3 ${styles.jobCard}`}
                >
                  <div className="services__content-2">
                    <div className="services__icon-2">
                      <span>💼</span>
                    </div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <p className={styles.jobText}>{job.subtitle}</p>

                    <ul className={styles.jobList}>
                      <li className={styles.jobListItem}>📍 {job.subtitle}</li>
                      <li className={styles.jobListItem}>
                        🚀 Интересные проекты
                      </li>
                      <li className={styles.jobListItem}>
                        👥 Профессиональная команда
                      </li>
                      <li className={styles.jobListItem}>
                        📈 Возможности для роста
                      </li>
                    </ul>

                    <div className="services__btn-2">
                      <a href="#" className="link-btn-2">
                        Подробнее о вакансии
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`contact__area pt-120 pb-120 ${styles.ctaSection}`}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className={styles.sectionTitleDark}>
                  Не нашли подходящую вакансию?
                </h2>
                <p className={styles.sectionSubtitleDark}>
                  Мы всегда рады талантливым специалистам. Отправьте свое резюме
                  и мы обязательно рассмотрим вашу кандидатуру!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-8">
              <div className="contact__content text-center">
                <div className="contact__info">
                  <div
                    className={`contact__item d-flex align-items-center justify-content-center mb-30 ${styles.contactItem}`}
                  >
                    <div className="contact__icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="contact__text text-left">
                      <span>Email для резюме</span>
                      <h5>
                        <a
                          href="mailto:hr@nerox.ru"
                          className={styles.contactEmail}
                        >
                          hr@nerox.ru
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="contact__btn mt-40">
                  {/* КРАСИВАЯ КНОПКА С ФИОЛЕТОВЫМ ГРАДИЕНТОМ */}
                  <a href="mailto:hr@nerox.ru" className={styles.resumeButton}>
                    <span>📧</span>
                    Отправить резюме
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
