import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './CookieConsent.module.scss';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    // Показываем баннер только если куки НЕ приняты
    if (consent !== 'accepted') {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const declineCookies = () => {
    // При отклонении либо удаляем запись, либо ставим другое значение
    // Но баннер должен появляться снова при следующем посещении
    localStorage.removeItem('cookieConsent'); // или localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  const handlePrivacyClick = () => {
    router.push('/privacy');
  };

  if (!show) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Мы используем файлы cookie для улучшения работы сайта. 
            <span onClick={handlePrivacyClick} className={styles.detailsLink}>
              Подробнее
            </span>
          </p>
        </div>
        <div className={styles.buttons}>
          <button onClick={acceptCookies} className={styles.acceptBtn}>
            Принять
          </button>
          <button onClick={declineCookies} className={styles.declineBtn}>
            Отклонить
          </button>
        </div>
      </div>
    </div>
  );
}
