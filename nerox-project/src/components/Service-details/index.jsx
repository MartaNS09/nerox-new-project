import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Footer from '../common/Footer';
import Header from '../common/Header';
import ServiceContact from './ServiceContact';
import ServiceDetailsArea from './ServiceDetailsArea';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details" />
      <ServiceDetailsArea />
      <ServiceContact />
      <BrandArea padd="services-padd" />
      <Footer />
    </>
  );
};

export default index;