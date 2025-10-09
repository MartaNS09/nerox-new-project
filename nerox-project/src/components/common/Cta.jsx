import Link from "next/link";

const Cta = ({ padd }) => {
  return (
    <>
      <div className={`tp-photograper-cta-2 pt-55 pb-55 ${padd ? padd : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-photograper-cta-wrapper text-center">
                <h3 className="tp-photograper-cta-title mb-20">
                  <b>Не нашли то, что искали?</b>
                </h3>
                <p>
                  Мы всегда в поиске людей с уникальными навыками. Отправьте нам
                  своё резюме, и мы свяжемся с вами,
                  <br /> как только появится вакансия, соответствующая вашим
                  ожиданиям.
                </p>
                <div className="tp-cta-btn mt-25">
                  <Link href="/contact" className="tp-solid-btn-square">
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
