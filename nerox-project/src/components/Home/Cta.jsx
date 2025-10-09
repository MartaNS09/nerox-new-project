import React from "react";

const Cta = () => {
  return (
    <>
      <div className="tpbs-cta-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbs-section-wrapper text-center mb-60">
                <span className="tpbs-sub-title mb-15">
                  Давайте работать вместе
                </span>
                <h3 className="tpbs-title-df">
                  <a href="mailto:info.yourwebmail.com">Обсудим ваш проект?</a>
                  {/* <span>.com</span> */}
                </h3>
              </div>
              <div className="tpbs-scroll">
                <a
                  href="#brand"
                  className="tpbs-scroll-btn tpbs-scroll-btn-df animate"
                >
                  <i className="fa-light fa-arrow-down-long"></i>
                </a>
                <span>
                  <a href="#brand">Листайте вниз</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
