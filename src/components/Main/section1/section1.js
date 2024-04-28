'use client'
import styles from './section1.module.css';
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Section1 = () => {
    const router= useRouter()

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
          <span style={{ color: 'black' }}>В</span> ДІЇ
          <button onClick={() =>{router.push('/needs')}} className={styles.registerButton}>Перейти до потреб</button>
        </div>
      </div>
      <div className={styles.endedText}>
        Хочеш долучитись до збору коштів або маєш нагальну потребу, яку потрібно закрити?
      </div>
    </div>
  );
};

export default Section1;