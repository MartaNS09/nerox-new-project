import Link from "next/link";
import portfolioData from "../../data/portfolioData";

const Portfolio = () => {
  return (
    <>
      <div className="tpbs-project-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbs-section-wrapper text-center mb-30">
                <span className="tpbs-sub-title mb-15">Портфолио</span>
                <h3 className="tpbs-title">Наши проекты</h3>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            {portfolioData.slice(0, 6).map((item) => {
              return (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="tpbs-project mb-50">
                    <div className="tpbs-project__thumb mb-30">
                      <div className="tpbs-project__thumb-image">
                        <img src={item.img} alt="project" />
                      </div>
                      <div className="tpbs-project__thumb-shape">
                        <img src="assets/img/project/4/tpbs-shape.png" alt="" />
                      </div>
                    </div>
                    <div className="tpbs-project__content">
                      <span className="tpbs-project__category mb-10">
                        {item.category}
                      </span>
                      <h4 className="tpbs-project__title">{item.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
