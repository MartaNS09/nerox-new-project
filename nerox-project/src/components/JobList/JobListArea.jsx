import Link from "next/link";
import { jobListData } from "../../data/joblistData";

const JobListArea = () => {
  return (
    <>
      <div className="job-list-area pt-140">
        <div className="container">
          {jobListData.map((item) => (
            <div key={item.id} className="job-list-item mb-50">
              <div className="row">
                <div className="col-xxl-8 col-xl-7 col-lg-6">
                  <h5 className="job-list-title mb-30">
                    <Link href={`/careers/${item.url}`}>{item.title}</Link>
                  </h5>
                  <span className="job-name">{item.subtitle}</span>
                  <span className="job-state mt-100">
                    <Link href={`/careers/${item.url}`}>Проектная работа</Link>
                  </span>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-6">
                  <h5 className="job-list-sm-title mb-20">
                    Зарплата: <br />
                    <br /> от {item.salary}
                  </h5>
                  <div className="job-btn mt-40">
                    <Link
                      href={`/careers/${item.url}`}
                      className="tp-solid-btn-square"
                    >
                      Откликнуться
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobListArea;
