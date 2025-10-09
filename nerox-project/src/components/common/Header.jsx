import React, { useState } from "react";
import { useTheme } from "next-themes";
import useSticky from "../../hooks/use-sticky";
import Link from "next/link";
import useGlobalContext from "../../hooks/useGlobalContext";
import Sidebar from "./Sidebar";

const Header = ({
  HeaderTwo,
  headerEight = false,
  homeNine,
  dynamic = false,
}) => {
  const { theme, setTheme } = useTheme();
  const { headerSticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const { setShowSidebar } = useGlobalContext();

  const mystyle = {
    backgroundColor: "transparent",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 99,
  };

  return (
    <>
      <header style={mystyle}>
        <div
          className={`tp-header-area ${HeaderTwo && "box-plr-85"} ${
            homeNine ? "header-style-9" : ""
          }`}
        >
          <div
            className={`tp-header-area-inner ${HeaderTwo ? "" : "inner-border"} 
          ${headerSticky && "header-sticky"} ${
              homeNine && "header-transparent border-0"
            }`}
            id="header-sticky"
          >
            <div
              className={`${
                HeaderTwo ? "container-fluid" : "container"
              } p-relative`}
            >
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo-dark">
                    <Link href="/">
                        {headerSticky ? (
                          <>
                            {dynamic && (
                              <img
                                src={"/" + "assets/img/logo/logo.png"}
                                alt="logo"
                              />
                            )}
                            {!dynamic && homeNine ? (
                              <img
                                src="/assets/img/logo/logo-white.png"
                                alt="logo"
                              />
                            ) : (
                              !dynamic && (
                                <img
                                  src="/assets/img/logo/logo.png"
                                  alt="logo"
                                />
                              )
                            )}
                          </>
                        ) : (
                          <img
                            src={"/" + "assets/img/logo/logo-white.png"}
                            alt="logo"
                          />
                        )}
                    </Link>
                  </div>
                  <div className="logo-white">
                    <Link href="/">
                        <img
                          src={
                            dynamic
                              ? "/" + "assets/img/logo/logo-white.png"
                              : "assets/img/logo/logo-white.png"
                          }
                          alt="logo"
                        />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-7 d-none d-lg-block">
                  <div className="tpmenu">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <Link href="/">Главная</Link>
                        </li>
                        <li>
                          <Link href="/about">О нас</Link>
                        </li>
                        <li>
                          <Link href="/services">Услуги</Link>
                        </li>
                        <li>
                          <Link href="/blog">Блог</Link>
                        </li>
                        <li>
                          <Link href="/careers">Вакансии</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {!headerEight && (
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                    <div className="tp-header-action">
                      <ul>
                        <li>
                          {headerSticky ? (
                            <button
                              onClick={() => setShowSidebar(true)}
                              className="info-toggle-btn sidebar-toggle-btn"
                            >
                              <i className="fas fa-bars"></i>
                            </button>
                          ) : (
                            <button
                              style={{ color: "white" }}
                              onClick={() => setShowSidebar(true)}
                              className="info-toggle-btn sidebar-toggle-btn"
                            >
                              <i className="fas fa-bars"></i>
                            </button>
                          )}
                        </li>
                        <li>
                          {/* dark mode button start  */}
                          <div className="mode-switch-wrapper my_switcher setting-option">
                            <input
                              type="checkbox"
                              className="checkbox"
                              id="chk"
                            />
                            {headerSticky ? (
                              <label className="label" htmlFor="chk">
                                <i
                                  onClick={() => setTheme("dark")}
                                  className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn"
                                  data-theme="dark"
                                ></i>
                                <i
                                  onClick={() => setTheme("light")}
                                  className="fas fa-moon tp-light-icon setColor light theme__switcher-btn"
                                  data-theme="light"
                                ></i>
                              </label>
                            ) : (
                              <label className="label" htmlFor="chk">
                                <i
                                  style={{ color: "white" }}
                                  onClick={() => setTheme("dark")}
                                  className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn"
                                  data-theme="dark"
                                ></i>
                                <i
                                  style={{ color: "white" }}
                                  onClick={() => setTheme("light")}
                                  className="fas fa-moon tp-light-icon setColor light theme__switcher-btn"
                                  data-theme="light"
                                ></i>
                              </label>
                            )}
                          </div>
                          {/* dark mode button end  */}
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {headerEight && (
                  <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-6 col-6">
                    <div className="tp-header-right d-flex align-items-center justify-content-end">
                      <div className="tp-header-action tp-header-action-8">
                        <ul>
                          <li>
                            {/* <!-- dark mode button start --> */}
                            <div className="mode-switch-wrapper my_switcher setting-option">
                              <input
                                type="checkbox"
                                className="checkbox"
                                id="chk"
                              />
                              {headerSticky ? (
                                <label className="label" htmlFor="chk">
                                  <i
                                    onClick={() => setTheme("dark")}
                                    className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn"
                                    data-theme="dark"
                                  ></i>
                                  <i
                                    onClick={() => setTheme("light")}
                                    className="fas fa-moon tp-light-icon setColor light theme__switcher-btn"
                                    data-theme="light"
                                  ></i>
                                </label>
                              ) : (
                                <label className="label" htmlFor="chk">
                                  <i
                                    style={{ color: "white" }}
                                    onClick={() => setTheme("dark")}
                                    className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn"
                                    data-theme="dark"
                                  ></i>
                                  <i
                                    style={{ color: "white" }}
                                    onClick={() => setTheme("light")}
                                    className="fas fa-moon tp-light-icon setColor light theme__switcher-btn"
                                    data-theme="light"
                                  ></i>
                                </label>
                              )}
                            </div>
                            {/* <!-- dark mode button end  --> */}
                          </li>
                          <li className="d-lg-none ml-20">
                            {headerSticky ? (
                              <button
                                onClick={() => setShowSidebar(true)}
                                className="info-toggle-btn sidebar-toggle-btn"
                              >
                                <i className="fas fa-bars"></i>
                              </button>
                            ) : (
                              <button
                                style={{ color: "white" }}
                                onClick={() => setShowSidebar(true)}
                                className="info-toggle-btn sidebar-toggle-btn"
                              >
                                <i className="fas fa-bars"></i>
                              </button>
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="tp-header-btn ml-30 d-none d-xl-block">
                        <a href="#" className="tp-solid-btn">
                          связаться с нами
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- modal-search-start --> */}
      {searchOpen && (
        <div className="modal search-modal" id="search-modal">
          <button
            onClick={() => setSearchOpen(false)}
            type="button"
            className="close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form>
                <input type="text" placeholder="Search here..." />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* <!-- modal-search-end --> */}

      {/* Sidebar  */}
      <Sidebar dynamic={true} />
      {/* Sidebar  */}
    </>
  );
};

export default Header;
