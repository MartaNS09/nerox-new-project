import React from "react";
import BrandArea from "../common/BrandArea";
import Breadcrumb from "../common/Breadcrumb";
import Cta from "../common/Cta";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Blog from "../Home/Blog";
import Testimonial from "../Home/Testimonial";
import ServicesBanner from "./ServicesBanner";
import ServicesList from "./ServicesList";

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Услуги APSOD" subtitle="Услуги" />
      <ServicesList />
      <ServicesBanner />
      <Testimonial padd="services-padd" />
      <Blog padd="services-blog-padd" />
      <BrandArea padd="services-brand" />
      <Footer />
    </>
  );
};

export default index;
