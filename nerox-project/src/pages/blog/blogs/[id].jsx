import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Breadcrumb from '../../../components/common/Breadcrumb';
import Header from '../../../components/common/Header';
import SEO from '../../../components/seo';
import blogData from '../../../data/blogData';
import VideoModal from '../../../components/common/VideoModal';
import useGlobalContext from '../../../hooks/useGlobalContext';
import Footer from '../../../components/common/Footer';



const recentBlog = blogData.slice(0, 2);

const BlogDetails = () => {
    const router = useRouter();
    const [blogItem, setBlogItem] = useState({});
    const { show, handleShow, handleClose } = useGlobalContext();
    const id = router.query.id;

    useEffect(() => {
        if (!id) {

        }
        else {
            setBlogItem(blogData.find(item => item.id == id))
        }
    }, [id]);
    return (
        blogItem ?
            <>
                <SEO pageTitle="Blog Details" />
                <Header dynamic={true} />
                <Breadcrumb dynamic={"/" + "assets/img/breadcrumb/breadcrumb-bg-1.jpg"} title="blog"
                    subtitle={blogItem.title} />

                <section className="postbox__area pt-120 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="postbox__wrapper pr-20 mb-60">
                                    <h3 className="postbox__title-df"> {blogItem?.title}</h3>
                                    <div className="postbox__meta mt-50">
                                        <span className="postdetails-tag">{blogItem.category}</span>
                                        <span><i className="far fa-user"></i>{blogItem.blogAuthor}</span>
                                        <span><i className="far fa-calendar-check"></i> {blogItem?.date} </span>
                                    </div>
                                    {blogItem.info}
                                    {/* <p className="postd-text mt-30 mb-50"><b>Quick summary :</b>  The way you present your product or service is essential to its success — or at least it could be if you know how to do it right. The first impression you make on people is crucial. When selling a product, you want that first impression to be as positive and remarkable as possible. If you have managed to draw them in, you will need to introduce the product within a few seconds.</p>
                                    <blockquote>
                                        <p>The way you present your product or service is essential to its success — or at least it could be if you know how to do it right. On the Web, like anywhere else, the first impression you make on people is crucial. When selling a product, you want that first impression to be as positive and remarkable as possible.
                                        </p>
                                        <p>Once people visit your website, make sure to attract their attention. If you have managed to draw them in, you will need to introduce the product within a few seconds. According to last year’s Google Analytics benchmarking report, bounce rates in the US were as high as 42.5%. If people don’t understand what you are offering them or how it works, they will lose interest quickly. Show them that your product is just what they want, that it’s useful and that it adds some kind of value to their lives.</p>
                                    </blockquote>
                                    <div className="postbox__thumb postbox__video w-img p-relative mb-50">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={"/" + "assets/img/blog/blog-big-2.jpg"} alt="" />
                                            </a>
                                        </Link>
                                        <button onClick={handleShow} className="play-btn pulse-btn popup-video"><i className="fas fa-play"></i></button>
                                    </div>
                                    <h4 className="postbox__title-sm mb-30">Surprise Your Visitors :</h4>
                                    <p>Another great way to attract attention is by surprising visitors. Offer them something they did not expect; make them pause and think to make sense of what they see. We like to be surrounded by the familiar, and things that don’t fit our expectations automatically draw our attention.</p>
                                    <p>Nike presents its new running shoes in the shape of wings, with the promise of a “Super-natural ride.” The arrangement of these multi-colored shoes and the fade in the middle almost force people to take a second look. The visual is not only appealing, but attracts attention because people are not sure whether they are looking at wings or shoes or both.One such example is the brand Evian. How could boring water possibly attract attention? Quite simple, actually. Come up with a product-related slogan, such as “Live young,” and then translate that slogan into a visual campaign using some great humor. A couple of years back, Evian’s funny campaign videos went viral — proof that its unique approach works.</p>
                                    <div className="row mt-50">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blogd-image mb-60 w-img">
                                                <img src={"/" + "assets/img/blog/blog-dsm-1.jpg"} alt="blog-img" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blogd-image mb-60 w-img">
                                                <img src={"/" + "assets/img/blog/blog-dsm-2.jpg"} alt="blog-img" />
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="bolgd-tags-wrapper">
                                        <h5 className="blogd-tag-title">Tags:</h5>
                                        <div className="tags-list">
                                            {
                                                blogItem.tags?.map(el => (
                                                    <div key={el}>{el}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer start */}
                <Footer />
                {/* Footer end */}


                <VideoModal show={show} handleClose={handleClose} videoId="oMhby921Ux4" />
            </>
            :
            <></>
    );
};

export default BlogDetails;