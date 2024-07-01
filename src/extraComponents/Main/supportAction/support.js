import styles from './support.module.css';

const SupportAction = () => {
  const noAccessToken = !localStorage.getItem('accessToken')
  return (
    <div className={styles.supportActionContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.wrapper}>
          <img src="./main-page/blaze.svg" alt="Blaze" className={styles.blazeImage} />
          <p className={styles.supportActionText}>Хочеш долучитись до збору коштів або маєш нагальну потребу, яку потрібно закрити?</p>
        </div>
        <div className={styles.wrapper2}>
          <p className={styles.supportActionText2}>Реєструйся та долучайся</p>
          <img src="./main-page/double-arrow.svg" alt="Double Arrow" className={styles.doubleArrowImage} />
        </div>
        {noAccessToken && <button className={styles.registerButton}>Зареєструватись</button>
        }
      </div>
    </div>
  );
};

export default SupportAction;
