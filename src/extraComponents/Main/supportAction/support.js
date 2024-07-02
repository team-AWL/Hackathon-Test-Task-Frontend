import React from 'react';
import styles from './support.module.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const SupportAction = () => {
  const { t } = useTranslation();
  const noAccessToken = !localStorage.getItem('accessToken');
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={styles.supportActionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.wrapper}>
          <img src="./main-page/blaze.svg" alt="Blaze" className={styles.blazeImage} />
          <p className={styles.supportActionText}>{t('want_to_join')}</p>
        </div>
        <div className={styles.wrapper2}>
          <p className={styles.supportActionText2}>{t('register_and_join')}</p>
          <img src={isDarkMode ? '/main-page/double-arrow-dark.svg' : '/main-page/double-arrow.svg'} alt="Double Arrow" className={styles.doubleArrowImage} />
        </div>
        {noAccessToken && (
          <button className={`${styles.registerButton} ${isDarkMode ? styles.dark : ''}`}>
            {t('register')}
          </button>
        )}
      </div>
    </div>
  );
};

export default SupportAction;
