import Link from "next/link";
import useGlobalContext from "../../hooks/useGlobalContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false,
});
import servicesData from "../../data/servicesData";

const Sidebar = ({ headerMenu, dynamic }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img: dynamic
        ? "/" + "assets/img/project/sm/project-7.jpg"
        : "assets/img/project/sm/project-7.jpg",
    },
    {
      id: 2,
      img: dynamic
        ? "/" + "assets/img/project/sm/project-8.jpg"
        : "assets/img/project/sm/project-8.jpg",
    },
    {
      id: 3,
      img: dynamic
        ? "/" + "assets/img/project/sm/project-9.jpg"
        : "assets/img/project/sm/project-9.jpg",
    },
    {
      id: 4,
      img: dynamic
        ? "/" + "assets/img/project/sm/project-10.jpg"
        : "assets/img/project/sm/project-10.jpg",
    },
    {
      id: 5,
      img: dynamic
        ? "/" + "assets/img/project/sm/project-13.jpg"
        : "assets/img/project/sm/project-13.jpg",
    },
    {
      id: 6,
      img: dynamic
        ? "/" + "assets/img/project/sm/project-12.jpg"
        : "assets/img/project/sm/project-12.jpg",
    },
  ];
  const lightBoxImages = galleryImages.map((img) => img.img);
  const images = lightBoxImages;

  return (
    <>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* <!-- sidebar area start --> */}
      <div className={`sidebar__area ${showSidebar ? "sidebar-opened" : ""}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close" onClick={() => setShowSidebar(false)}>
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
              <Link href="/">
                <img
                  src={
                    dynamic
                      ? "/" + "assets/img/logo/logo.png"
                      : "assets/img/logo/logo.png"
                  }
                  alt="logo"
                />
              </Link>
            </div>

            <div className="mobile-menu fix">
              <nav
                id="mobile-menu"
                className={`${headerMenu ? "d-block" : "d-lg-none"}`}
              >
                <ul>
                  <div className="single_link iconAdd">
                    <li onClick={() => setShowSidebar(false)}>
                      <Link href="/home">Главная</Link>
                    </li>
                  </div>

                  <div className="single_link iconAdd">
                    <li onClick={() => setShowSidebar(false)}>
                      <Link href="/about">О нас</Link>
                    </li>
                  </div>

                  <Collapsible
                    trigger={<a>Услуги</a>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      {servicesData.map((item) => (
                        <li key={item.id} onClick={() => setShowSidebar(false)}>
                          <Link href={`/services/${item.url}`}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>

                  <div className="single_link iconAdd">
                    <li onClick={() => setShowSidebar(false)}>
                      <Link href="/blog">Блог</Link>
                    </li>
                  </div>

                  <div className="single_link iconAdd">
                    <li onClick={() => setShowSidebar(false)}>
                      <Link href="/careers">Вакансии</Link>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>

            <div
              className={`sidebar__text ${
                headerMenu ? "d-none" : "d-none d-lg-block"
              }`}
            >
              {/* ПЕРЕВОД: Текст о компании */}
              <p>
                Мы создаем современные digital-решения, которые помогают бизнесу
                развиваться в цифровой среде. Наша команда специалистов готова
                реализовать проекты любой сложности.
              </p>
            </div>
            <div
              className={`sidebar__map ${
                headerMenu ? "d-none" : "d-none d-lg-block"
              } mb-15`}
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"></iframe>
            </div>
            <div className="sidebar__contact mt-30 mb-20">
              <h4>Контактная информация</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    {/* Адрес можно оставить или закомментировать */}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps"
                    >
                      Беларусь
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    {/* Ваш номер телефона */}
                    <a href="tel:+375445777724">+375 (44) 577-77-24</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    {/* Ваш email */}
                    <a href="mailto:info@apsod.by">info@apsod.by</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}
      ></div>
      {/* <!-- sidebar area end -->  */}
    </>
  );
};

export default Sidebar;
