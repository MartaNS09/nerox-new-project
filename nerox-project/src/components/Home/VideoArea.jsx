import Link from "next/link";
import Image from "next/image";
import useGlobalContext from "../../hooks/useGlobalContext";
import VideoModal from "../common/VideoModal";

const VideoArea = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <div className="tpbs-video-area position-relative grey-bg">
        <div className="tpbsvideo-left text-center p-relative">
          <div
            className="tpbs-left-image"
            style={{
              backgroundImage: `url(assets/img/video/video-img-3.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="tpbs-play-btn">
            <button
              onClick={handleShow}
              className="play-text popup-video animate-2"
            >
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
          <div
            className="tpbs-vnoise-bg"
            data-background="assets/img/testimonial/tpbs-vnoise-bg.png"
          ></div>
          <div className="tpbs-shape">
            <Image
              src="/assets/img/video/video-shape-1.png"
              alt="video shape"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="tpbs-video-wrapper">
          <div className="container-fluid">
            <div className="row g-0 justify-content-end align-items-center">
              <div className="col-lg-6 ">
                <div className="tpbsvideo-box">
                  <div className="tpbsvideo-content">
                    <div className="tpbs-section-wrapper mb-40">
                      <span className="tpbs-sub-title mb-15">
                        Наша глобальная цель
                      </span>
                      <h3 className="tpbs-title">
                        Создавать digital-продукты, которые решают реальные
                        задачи бизнеса.
                      </h3>
                    </div>
                    <p>
                      Мы помогаем компаниям достигать их целей, становясь
                      надежным технологическим партнером на каждом этапе
                      развития.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal show={show} handleClose={handleClose} videoId="CMLSrheE5rU" />
    </>
  );
};

export default VideoArea;
