import React from 'react';
import styles from './news.module.css';

const News = () => {
    return (
      <div className={styles.newsContainer}>
        <div className={styles.newsHeader}>
          <h1 className={styles.newsTitle}>Новини</h1>
          <p className={styles.allNewsLink}>Всі новини</p>
        </div>
        <div className={styles.newsSection}>
          <div className={styles.leftSection}>
            <div className={styles.imageContainer}>
              <img src="/main-page/news1.svg" alt="News 1" className={styles.newsImage} />
              <div className={styles.textBlock1}>
                <p>За крок до захоплення Києва: Буданов розкрив унікальні деталі, хто та як зупинив окупантів</p>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.imageContainer}>
              <img src="/main-page/news2.svg" alt="News 2" className={styles.newsImage} />
              <div className={styles.textBlock2}>
                <p>За крок до захоплення Києва: Буданов розкрив унікальні деталі, хто та як зупинив окупантів</p>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src="/main-page/news3.svg" alt="News 2" className={styles.newsImage} />
              <div className={styles.textBlock3}>
                <p>За крок до захоплення Києва: Буданов розкрив унікальні деталі, хто та як зупинив окупантів</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default News;