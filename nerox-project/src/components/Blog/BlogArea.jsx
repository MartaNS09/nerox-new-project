import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import blogData from "../../data/blogData";
import useGlobalContext from "../../hooks/useGlobalContext";
import VideoModal from "../common/VideoModal";

const blogItems = blogData;

const sliderImg = [
  {
    id: 1,
    img: "assets/img/blog/blog-big-4.jpg",
  },
  {
    id: 2,
    img: "assets/img/blog/blog-big-5.jpg",
  },
  {
    id: 3,
    img: "assets/img/blog/blog-big-6.jpg",
  },
];

const BlogArea = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <section className="postbox__area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                {blogItems.map((item) => (
                  <article key={item.id} className="postbox__item mb-100">
                    <div className="postbox__thumb w-img mb-30">
                      <div className={item.class}>
                        {item.video ? (
                          <>
                            <Link href={`/blog/blogs/${item.id}`}>
                              <img src={item.bigImg} alt="" />
                              <div className="postbox__tag-wrapper">
                                <span className="postbox__tag">
                                  Personal . Stories
                                </span>
                              </div>
                            </Link>{" "}
                            <button
                              onClick={handleShow}
                              className="play-btn pulse-btn popup-video"
                            >
                              <i className="fas fa-play"></i>
                            </button>
                          </>
                        ) : item.slider ? (
                          <>
                            <Swiper
                              navigation={{
                                nextEl: ".tp-swiper-next",
                                prevEl: ".tp-swiper-prev",
                              }}
                              modules={[Navigation, Pagination, Autoplay]}
                              className="swiper-wrapper"
                              spaceBetween={15}
                              slidesPerView={1}
                              autoplay={{ delay: 6000 }}
                            >
                              {sliderImg.map((item) => {
                                return (
                                  <SwiperSlide key={item.id}>
                                    <div className="postbox__slider-item">
                                      <img src={item.img} alt="" />
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                            </Swiper>{" "}
                            <div>
                              <button className="tp-swiper-next swiper-arrow">
                                <i className="far fa-long-arrow-right"></i>
                              </button>
                              <button className="tp-swiper-prev swiper-arrow">
                                <i className="far fa-long-arrow-left"></i>
                              </button>
                            </div>{" "}
                          </>
                        ) : (
                          <Link href={`/blog/blogs/${item.id}`}>
                            <img src={item.img} alt="" />
                          </Link>
                        )}
                      </div>
                      <div className="postbox__tag-wrapper">
                        <span className="postbox__tag">{item.category}</span>
                      </div>
                    </div>
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          <i className="far fa-user"></i> {item.blogAuthor}
                        </span>
                        <span>
                          <i className="far fa-calendar-check"></i> {item.date}{" "}
                        </span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href={`/blog/blogs/${item.id}`}>
                          {item.title}
                        </Link>
                      </h3>
                      {/* <div className="postbox__text">
                          <p>This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience. </p>
                        </div>
                        <div className="postbox__read-more">
                          <Link href={`/blog/blogs/${item.id}`} className="tp-solid-btn">read more</Link>
                        </div> */}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} videoId="oMhby921Ux4" />
    </>
  );
};

export default BlogArea;
