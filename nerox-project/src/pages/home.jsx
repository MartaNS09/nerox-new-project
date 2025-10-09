import dynamic from 'next/dynamic';
import Home from '../components/Home';
import SEO from '../components/seo';

const HomeFour = () => {
  return (
    <>
      <SEO pageTitle="Home" />
      <Home />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeFour), { ssr: false });