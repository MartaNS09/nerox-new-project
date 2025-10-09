import Link from "next/link";
import blogData from "../../data/blogData";

const Blog = () => {
  return (
    <>
      <div className="tpbs-blog-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="tpbs-section-wrapper text-center mb-30">
              <span className="tpbs-sub-title mb-15">БЛОГ</span>
              <h3 className="tpbs-title">Полезные статьи и новости</h3>
            </div>
          </div>
          <div className="row mt-30">
            {blogData.slice(0, 3).map((item) => {
              return (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="tpblog mb-30">
                    <div className="tpblog__thumb mb-30">
                      <Link href={`/blog/blogs/${item.id}`}>
                        <img src={item.img} alt="blog" />
                      </Link>
                    </div>
                    <div className="tpblog__content">
                      <div className="tpblog__meta mb-25">
                        <span className="tpblog__catagory">
                          {item.category}
                        </span>
                        <span className="tpblog__date">{item.date}</span>
                      </div>
                      <h5 className="tpblog__title">
                        <Link href={`/blog/blogs/${item.id}`}>
                          {item.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-xl-12">
              <div className="tpbs-blog-button text-center mt-30">
                <Link href="/blog" className="tp-solid-btn">
                  Все статьи
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
