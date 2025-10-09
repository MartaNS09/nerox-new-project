import React, { useState } from 'react';

const JobDetailsArea = ({ item }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    msg: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Заявка отправлена!\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.msg}`);
    setFormData({ name: '', email: '', subject: '', msg: '' });
  };

  if (!item) {
    return <div>Вакансия не найдена</div>;
  }

  return (
    <div className="job-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="job-details-content">
              <h1>{item.title}</h1>
              <p className="job-subtitle">{item.subtitle}</p>
              <p className="job-salary">Зарплата: {item.salary}</p>
              
              {item.offer && (
                <div className="job-offer">
                  <h3>Что мы предлагаем:</h3>
                  <ul>
                    {item.offer.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.requirements && (
                <div className="job-requirements">
                  <h3>Требования:</h3>
                  <ul>
                    {item.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="job-apply-form">
                <h3>Откликнуться на вакансию</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Ваш email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="msg"
                        placeholder="Ваше сообщение"
                        value={formData.msg}
                        onChange={handleChange}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="common-btn">
                        Отправить заявку
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsArea;
