import { useNavigate } from "react-router-dom";
import styles from './section1.module.css';
import { useSelector } from 'react-redux';

const Section1 = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={styles.section1}>
      <div className={styles.section11}>
        <span className={styles.firstLine}>
          Ми - це зосередження запитів про термінові потреби людей, військових, з метою полегшення пошуку інформації охочим допомогти
        </span>
        <img src="/main-page/section11.svg" alt="Section 1 Image" className={styles.image} />
      </div>
      <div className={styles.bottomText}>
        ДОПОМОГА
      </div>
      <div className={styles.section12}>
        <div className={styles.imageWrapper}>
          <img src="/main-page/section12.svg" alt="Section 12 Image" className={styles.image} />
        </div>
        <div className={styles.textBesideImage}>
          <span className={`${styles.v} ${isDarkMode ? styles.dark : ''}`}>В</span> ДІЇ
          <button onClick={() => navigate('/needs')} className={`${styles.registerButton} ${isDarkMode ? styles.dark : ''}`}>
            Перейти до потреб
          </button>
        </div>
      </div>
      <div className={styles.endedText}>
        Хочеш долучитись до збору коштів або маєш нагальну потребу, яку потрібно закрити?
      </div>
    </div>
  );
};

export default Section1;