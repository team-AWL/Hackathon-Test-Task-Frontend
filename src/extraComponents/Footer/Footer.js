import React, { useState } from 'react';
import styles from './footer.module.css';
import { subscribeToNewNeeds } from "../../util/api";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.isDarkMode);
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();

      subscribeToNewNeeds(formData)
        .then(response => {
          setFormData(prevState => ({
            ...prevState,
            email: "" // Очищаємо поле email
          }));
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div className={`${styles.footer} ${isDarkMode ? styles.dark : ''}`}>
      <div className={`${styles.footerinfo} ${isDarkMode ? styles.dark : ''}`}>
        <div className={styles.footeremail}>
          <div className={styles.footeremail1}>
            <p>
              {t('send_your_email')}
              <br />
              {t('get_notifications')}
            </p>
          </div>
          <div className={`${styles.footeremail2} ${isDarkMode ? styles.dark : ''}`}>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder={t('your_email')}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <div className={styles.socialnet}>
          <div className={styles.leftSection}>
            <div className={styles.logo}>
              <img src={isDarkMode ? '/logo-dark.svg' : '/logo.svg'} alt="Логотип" />
              <div className={`${styles.logoText} ${isDarkMode ? styles.dark : ''}`}>{t('help_in_action')}</div>
            </div>
            <div className={`${styles.aboutus} ${isDarkMode ? styles.dark : ''}`}>
              <p>{t('about_us')}</p>
              <p>{t('register')}</p>
              <p>{t('needs')}</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className={styles.icons}>
            <img src={isDarkMode ? '/instagram-dark.svg' : '/instagram.svg'} alt="Instagram" />
            <img src={isDarkMode ? '/facebook-dark.svg' : '/facebook.svg'} alt="Facebook" />
            <img src={isDarkMode ? '/x-dark.svg' : '/x.svg'} alt="Twitter" />
            <img src={isDarkMode ? '/linkedin-dark.svg' : '/linkedin.svg'} alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div className={`${styles.content} ${isDarkMode ? styles.dark : ''}`}>
        <p>{t('all_rights_reserved')}</p>
      </div>
    </div>
  );
};

export default Footer;
