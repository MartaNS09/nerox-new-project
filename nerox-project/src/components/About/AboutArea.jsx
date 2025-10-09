import Link from "next/link";

const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                {/* ПЕРЕВОД: NER CREATIVE -> APSOD CREATIVE */}
                <h3 className="tpabout-xd-title mb-15">
                  <b>APSOD</b> CREATIVE
                </h3>
                {/* ПЕРЕВОД: Web development for your business -> Веб-разработка для вашего бизнеса */}
                <span className="tpabout-xs-title mb-40">
                  Веб-разработка для вашего бизнеса
                </span>
                <p className="tpab-text">
                  {/* ПЕРЕВОД: Мы - компания по цифровой трансформации... */}
                  Мы - студия веб-разработки, которая предоставляет современные
                  инженерные решения, помогая компаниям решать сложные задачи на
                  пути их цифровой трансформации. С 2023 года мы являемся
                  надежным партнером для бизнеса, стремящегося к цифровому
                  развитию.
                </p>
                <p>
                  {/* ПЕРЕВОД: Наша миссия - искать и находить... */}
                  Наша миссия - находить точки роста, причинно-следственные
                  связи, перспективные проекты и талантливых людей. Мы растем
                  вместе с клиентами и создаем нашу общую историю успеха. Мы
                  анализируем каждый пиксель, байт и символ, просеивая
                  бизнес-модели и решения через сито здравого смысла. Мы говорим
                  все как есть.
                </p>
                <div className="tpabout-btn mt-50">
                  {/* ПЕРЕВОД: Contact us -> Связаться с нами */}
                  <Link href="/contact" className="tp-solid-btn">Связаться с нами</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                {/* ДОБАВИТЬ СЛЕШ: assets -> /assets */}
                <img src="/assets/img/about/tpabout-img.jpg" alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;
