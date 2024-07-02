import React from 'react';
import styles from './section1.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Section1 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={styles.section1}>
      <div className={styles.section11}>
        <span className={styles.firstLine}>
          {t('we_are_concentration')}
        </span>
        <img src="/main-page/section11.svg" alt="Section 1 Image" className={styles.image} />
      </div>
      <div className={styles.bottomText}>
        {t('help')}
      </div>
      <div className={styles.section12}>
        <div className={styles.imageWrapper}>
          <img src="/main-page/section12.svg" alt="Section 12 Image" className={styles.image} />
        </div>
        <div className={styles.textBesideImage}>
          <span className={`${styles.v} ${isDarkMode ? styles.dark : ''}`}>{t('in')}</span> {t('action')}
          <button onClick={() => navigate('/needs')} className={`${styles.registerButton} ${isDarkMode ? styles.dark : ''}`}>
            {t('go_to_needs')}
          </button>
        </div>
      </div>
      <div className={styles.endedText}>
        {t('join_or_need_help')}
      </div>
    </div>
  );
};

export default Section1;