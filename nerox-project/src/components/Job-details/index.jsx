import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Footer from '../common/Footer';
import Header from '../common/Header';
import JobDetailsArea from './JobDetailsArea';

const index = ({ item }) => {
  return (
    <>
      <Header dynamic={true} />
      <Breadcrumb title={item.title} subtitle={item.title} dynamic={"/" + "assets/img/breadcrumb/breadcrumb-bg-1.jpg"} />
      <JobDetailsArea item={item} />
      <Footer />
    </>
  );
};

export default index;