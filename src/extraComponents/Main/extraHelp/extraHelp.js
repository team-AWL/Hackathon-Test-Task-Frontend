import React from 'react';
import styles from './extraHelp.module.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ExtraHelp = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={styles.extraHelpContainer}>
      <h2 className={styles.title}>{t('urgent_need')}</h2>
      <div className={styles.sectionsContainer}>
        <div className={styles.leftSection}>
          <div className={`${styles.item} ${isDarkMode ? styles.dark : ''}`}>
            <span className={styles.itemText}>{t('needed_amount')}</span>
            <span className={styles.itemNumber}>100 000 +</span>
          </div>
          <div className={`${styles.item} ${isDarkMode ? styles.dark : ''}`}>
            <span className={styles.itemText}>{t('tactical_backpacks')}</span>
            <span className={styles.itemNumber}>15</span>
          </div>
          <div className={`${styles.item} ${isDarkMode ? styles.dark : ''}`}>
            <span className={styles.itemText}>{t('brigade')}</span>
            <span className={styles.itemNumber}>128</span>
          </div>
          <div className={styles.quote}>
            <span className={styles.quoteText}>"</span>
            <p className={styles.quoteContent}>
              {t('brigade_quote')}
            </p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />
          <div className={styles.learnMoreContainer}>
            <div className={`${styles.learnMore} ${isDarkMode ? styles.dark : ''}`}>
              <p className={`${styles.learnMoreText} ${isDarkMode ? styles.dark : ''}`}>{t('learn_more')}</p>
              <img src={isDarkMode ? '/main-page/arrow2-dark.svg' : '/main-page/arrow2.svg'} alt="Arrow" className={styles.arrowIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraHelp;