import React from "react";
import Image from "next/image";

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="services-details-area pt-140 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <Image
                  src="/assets/img/services/services-d1.jpg"
                  alt="Дизайн и разработка сайтов"
                  width={500}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <Image
                  src="/assets/img/services/services-d2.jpg"
                  alt="SEO оптимизация сайтов"
                  width={500}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1 className="services-d-title mb-25">
                Дизайн и разработка сайтов с SEO-оптимизацией
              </h1>
              <p className="services-text mb-25">
                Мы создаем современные и функциональные веб-сайты, которые не
                только привлекают внимание, но и решают конкретные
                бизнес-задачи. Каждый проект начинается с глубокого анализа
                вашей целевой аудитории и конкурентной среды, что позволяет нам
                разрабатывать решения, максимально соответствующие вашим целям.
              </p>
              <p className="services-text mb-45">
                Наша команда использует передовые технологии и методологии
                разработки, чтобы обеспечить высокую производительность,
                безопасность и масштабируемость вашего сайта. Мы уделяем
                внимание каждой детали - от пользовательского опыта до
                технической реализации, создавая продукты, которые работают
                эффективно и приносят реальную пользу вашему бизнесу.
              </p>

              <h2 className="services-sm-title mb-25">
                Комплексное SEO-продвижение
              </h2>
              <p className="services-text mb-25">
                Мы интегрируем SEO-оптимизацию на всех этапах разработки сайта,
                что позволяет сразу выводить ваш ресурс в топ поисковых систем.
                Наша стратегия включает:
              </p>
              <div className="job-feature-list mt-30 mb-45">
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Технический
                    аудит и SEO-анализ перед началом разработки
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Семантическое
                    ядро и структура сайта, ориентированная на поисковые системы
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Оптимизация
                    скорости загрузки и Core Web Vitals
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Адаптивная
                    верстка для мобильных устройств
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Чистый код и
                    правильная HTML-разметка
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Интеграция с
                    системами аналитики и вебмастерами
                  </li>
                </ul>
              </div>

              <h3 className="services-sm-title mb-25">
                4 простых этапа работы
              </h3>
              <p>
                Наш процесс разработки построен таким образом, чтобы обеспечить
                максимальную прозрачность и эффективность на каждом этапе. Мы
                тесно сотрудничаем с клиентами, учитывая все пожелания и
                предоставляя регулярные отчеты о ходе работы.
              </p>
              <div className="row mt-70">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">01</span>
                    </div>
                    <h4 className="step-title mt-40">
                      Анализ и SEO-планирование
                    </h4>
                    <p>
                      Изучаем бизнес-задачи, анализируем целевую аудиторию,
                      конкурентов и разрабатываем SEO-стратегию
                    </p>
                    <div className="step-item-shape shape-1">
                      <Image
                        src="/assets/img/shape/arrow-shape-1.png"
                        alt="Следующий этап"
                        width={50}
                        height={20}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">02</span>
                    </div>
                    <h4 className="step-title mt-40">
                      Дизайн и SEO-прототипирование
                    </h4>
                    <p>
                      Создаем визуальную концепцию с учетом UX/UI и
                      SEO-требований, разрабатываем интерактивные прототипы
                    </p>
                    <div className="step-item-shape shape-1 d-none d-lg-block">
                      <Image
                        src="/assets/img/shape/arrow-shape-2.png"
                        alt="Следующий этап"
                        width={50}
                        height={20}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">03</span>
                    </div>
                    <h4 className="step-title mt-40">
                      Разработка с SEO-оптимизацией
                    </h4>
                    <p>
                      Программируем функционал с чистой структурой данных,
                      мета-тегами и оптимизированным кодом для поисковиков
                    </p>
                    <div className="step-item-shape shape-1">
                      <Image
                        src="/assets/img/shape/arrow-shape-1.png"
                        alt="Следующий этап"
                        width={50}
                        height={20}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">04</span>
                    </div>
                    <h4 className="step-title mt-40">
                      Запуск и SEO-сопровождение
                    </h4>
                    <p>
                      Публикуем сайт, настраиваем аналитику и продолжаем
                      SEO-продвижение для роста позиций
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-70">
                <div className="col-xl-12">
                  <h3 className="services-sm-title mb-25">
                    Почему выбирают нашу SEO-разработку?
                  </h3>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="job-feature-list">
                        <ul>
                          <li>
                            <i className="fa-solid fa-chart-line"></i>Быстрый
                            выход в топ поисковых систем
                          </li>
                          <li>
                            <i className="fa-solid fa-mobile-screen"></i>
                            Идеальная адаптация под мобильные устройства
                          </li>
                          <li>
                            <i className="fa-solid fa-gauge-high"></i>Высокая
                            скорость загрузки страниц
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="job-feature-list">
                        <ul>
                          <li>
                            <i className="fa-solid fa-shield-halved"></i>
                            Безопасность и защита от взлома
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-up-wide-short"></i>
                            Постоянный рост органического трафика
                          </li>
                          <li>
                            <i className="fa-solid fa-headset"></i>Техническая
                            поддержка 24/7
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
