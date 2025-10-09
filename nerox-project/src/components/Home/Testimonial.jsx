import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: "assets/img/testimonial/3/ts-1.jpg",
      desc: (
        <>
          «Хочу выразить благодарность за профессиональный подход и качественную
          работу! Сайт был разработан в срок, все пожелания учтены. Отдельное
          спасибо за терпение и внимательность к деталям. Рекомендую как
          надежного партнера.»
        </>
      ),
      name: "Анна Петрова",
      position: 'Директор по маркетингу, ООО "Вектор"',
    },
    {
      id: 2,
      img: "assets/img/testimonial/3/ts-2.jpg",
      desc: (
        <>
          «В оговоренные сроки получили готовый интернет-магазин с интеграцией с
          1С и системой онлайн-платежей. За 4 месяца работы количество заказов
          выросло на 67%, затраты на разработку окупились за первый квартал.
          Очень довольны результатом!»
        </>
      ),
      name: "Дмитрий Семенов",
      position: 'Владелец сети магазинов "Стиль и Комфорт"',
    },
    {
      id: 3,
      img: "assets/img/testimonial/3/ts-3.jpg",
      desc: (
        <>
          «Обратились для создания корпоративного портала и системы управления
          проектами. Результат превзошел ожидания - сотрудники оценили удобный
          интерфейс, а руководство получило мощный аналитический инструмент.
          Спасибо за глубокое понимание бизнес-процессов.»
        </>
      ),
      name: "Мария Иванова",
      position: 'IT-директор, Холдинг "Промтех"',
    },
  ];
  return (
    <>
      <div
        className="tpbs-testimonial-area tpbs-ts-overlay"
        style={{
          backgroundImage: `url(assets/img/testimonial/3/testimonial-bg.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="tpbs-noise-bg"
          style={{
            backgroundImage: `url(assets/img/testimonial/3/noise-bg.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="tpbs-ts-wrapper">
            <div className="tpbs-testimonial-slider tpbs-ts-slider-active">
              <Swiper
                modules={[Pagination]}
                className="pb-80"
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
              >
                {testimonialData.slice(0, 6).map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="tpbs-slider-item text-center">
                        <div className="tpbs-author-image mb-50">
                          <Image
                            src={item.img}
                            alt="client-img"
                            width={80}
                            height={80}
                            style={{ objectFit: "cover", borderRadius: "50%" }}
                          />
                        </div>
                        <div className="tpbs-quote mb-30">
                          <i className="fa-solid fa-quote-left"></i>
                        </div>
                        <div className="tpbs-review mb-40">
                          <p>{item.desc}</p>
                        </div>
                        <span className="tpbs-client-name">{item.name}</span>
                        <div className="tpbs-client-position">
                          {item.position}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="tpbs__shape tpbs__shape-1">
          <Image
            src="/assets/img/shape/shape-1.png"
            alt="shape-1"
            width={100}
            height={100}
          />
        </div>
        <div className="tpbs__shape tpbs__shape-4">
          <Image
            src="/assets/img/shape/shape-2.png"
            alt="shape-2"
            width={100}
            height={100}
          />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <Image
            src="/assets/img/shape/shape-3.png"
            alt="shape-3"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
