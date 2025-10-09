import awardData from '../../data/awardsData';

const NeroxAwards = () => {

  return (
    <>
      <div className="tp-award-area pt-135 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-wrapper text-center">
                <h3 className="tpabout-xd-title mb-15"><b>Neorox Awards</b></h3>
              </div>
            </div>
          </div>
          <div className="row mt-35">
            <div className="col-xl-12">
              {
                awardData.map(item => (
                  <div key={item.id} className="tp-award-item mb-30">
                    <div style={{ padding: "20px 0" }} className="award-inner d-md-flex align-items-center">
                      <div className="award-image">
                        <img src={item.img} alt="award-img" />
                      </div>
                      <div className="award-content">
                        <h4 className="award-title">{item.title}
                        </h4>
                        <span className="award-meta">
                          <span className="award-year">2022..</span>  MNX Business Card</span>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeroxAwards;