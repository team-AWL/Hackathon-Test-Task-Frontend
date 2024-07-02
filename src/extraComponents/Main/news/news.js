import React from 'react';
import styles from './news.module.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsHeader}>
        <h1 className={styles.newsTitle}>{t('news')}</h1>
        <p className={`${styles.allNewsLink} ${isDarkMode ? styles.dark : ''}`}>{t('all_news')}</p>
      </div>
      <div className={styles.newsSection}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <img src="/main-page/news1.svg" alt="News 1" className={styles.newsImage} />
            <div className={`${styles.textBlock1} ${isDarkMode ? styles.dark : ''}`}>
              <p>{t('news1_text')}</p>
            </div>
            <div className={`${styles.learnMoreBox1} ${isDarkMode ? styles.dark : ''}`}>
              <p className={`${styles.learnMoreText1} ${isDarkMode ? styles.dark : ''}`}>{t('learn_more')}</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.imageContainer}>
            <img src="/main-page/news2.svg" alt="News 2" className={styles.newsImage} />
            <div className={`${styles.textBlock2} ${isDarkMode ? styles.dark : ''}`}>
              <p>{t('news2_text')}</p>
            </div>
            <div className={`${styles.learnMoreBox} ${isDarkMode ? styles.dark : ''}`}>
              <p className={`${styles.learnMoreText} ${isDarkMode ? styles.dark : ''}`}>{t('learn_more')}</p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src="/main-page/news3.svg" alt="News 3" className={styles.newsImage} />
            <div className={`${styles.textBlock2} ${isDarkMode ? styles.dark : ''}`}>
              <p>{t('news3_text')}</p>
            </div>
            <div className={`${styles.learnMoreBox} ${isDarkMode ? styles.dark : ''}`}>
              <p className={`${styles.learnMoreText} ${isDarkMode ? styles.dark : ''}`}>{t('learn_more')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
