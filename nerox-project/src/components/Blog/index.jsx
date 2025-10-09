import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import Header from "../common/Header";
import BlogArea from "./BlogArea";

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Блог APSOD" subtitle="Блог" />
      <BlogArea />
      <Footer />
    </>
  );
};

export default index;
