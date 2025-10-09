import Link from 'next/link';

import Breadcrumb from '../common/Breadcrumb';
import Footer from '../common/Footer';
import Header from '../common/Header';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Page not found" subtitle="404" />

      <div className="error-area pt-100 pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="error-constant text-center">
                <div className="error-image w-img">
                  <img src="/assets/img/about/404-img.png" alt="404 img" />
                </div>
                <p>Oops! The page you are looking for does not exist. It may have been moved or deleted.</p>
                <h4 className="error-title mt-60"><Link href="/">Home</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default index;