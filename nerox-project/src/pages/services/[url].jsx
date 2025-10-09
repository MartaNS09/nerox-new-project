import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import BrandArea from '../../components/common/BrandArea';
import Breadcrumb from '../../components/common/Breadcrumb';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import SEO from '../../components/seo';
import Router from 'next/router'

import servicesData from '../../data/servicesData';

const ServiceDetails = () => {
    const router = useRouter();
    const [serviceItem, setServiceItem] = useState({});
    const url = router.query.url;

    useEffect(() => {
        if (!url) {

        }
        else {
            setServiceItem(servicesData.find(item => item.url == url))
        }
    }, [url])

    return (
        serviceItem ?
            <>
                <SEO pageTitle={serviceItem.title} />
                <Header dynamic={true} />
                <Breadcrumb title={serviceItem.title} subtitle={serviceItem.title}
                    dynamic={"/" + "assets/img/breadcrumb/breadcrumb-bg-1.jpg"} />

                <div className="services-details-area pt-140 pb-105">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="services-sm-image w-img mb-45">
                                    <img src={"/" + "assets/img/services/services-d1.jpg"} alt="services-sm-img" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="services-sm-image w-img mb-45">
                                    <img src={"/" + "assets/img/services/services-d2.jpg"} alt="services-sm-img" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <h4 className="services-d-title mb-25">{serviceItem.title}</h4>
                                {serviceItem.description}
                                <h5 className="services-sm-title mb-25">4 easy steps</h5>
                                <div className="row mt-70">
                                    {
                                        serviceItem.steps ?
                                            serviceItem.steps.map((el, id) => (
                                                <div key={id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                                    <div className="step-item text-center mb-30">
                                                        <div className="step-number-wrapper">
                                                            <span className="step-number">0{id + 1}</span>
                                                        </div>
                                                        <h6 className="step-title mt-40">{el.title}</h6>
                                                        <p>{el.text}</p>
                                                        {id === 3
                                                            ?
                                                            <></>
                                                            :
                                                            <div className="step-item-shape shape-1 d-none d-lg-block">
                                                                <img src={"/" + "assets/img/shape/arrow-shape-2.png"} alt="arrow-shape" />
                                                            </div>
                                                        }

                                                    </div>
                                                </div>
                                            ))
                                            :
                                            <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*BrandArea */}
                <BrandArea padd="services-padd" dynamic={true} />
                {/*Footer */}
                <Footer />

            </>
            :
            Router.push('/404')
    );
};

export default dynamic(() => Promise.resolve(ServiceDetails), { ssr: false });