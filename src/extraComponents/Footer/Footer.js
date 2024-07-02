import styles from './footer.module.css';
import {login, subscribeToNewNeeds} from "../../util/api";
import {useState} from "react";
import { useSelector } from 'react-redux';

const Footer = () => {
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
          Надішли свій Email та отримуй<br />
          сповіщення про нові запити
        </p>
      </div>
      <div className={`${styles.footeremail2} ${isDarkMode ? styles.dark : ''}`}>
        <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="твій Email..."  onKeyDown={handleKeyDown} />
      </div>
    </div>
    <div className={styles.socialnet}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={isDarkMode ? '/logo-dark.svg' : '/logo.svg'} alt="Логотип" />
          <div className={`${styles.logoText} ${isDarkMode ? styles.dark : ''}`}> Допомога в дії </div>
        </div>
        <div className={`${styles.aboutus} ${isDarkMode ? styles.dark : ''}`}>
          <p>Про нас</p>
          <p>Зареєструватись</p>
          <p>Потреби</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className={styles.icons}>
        <img src={isDarkMode ? '/instagram-dark.svg' : '/instagram.svg'} alt="Instagram" />
        <img src={isDarkMode ? '/facebook-dark.svg' : '/facebook.svg'} alt="Instagram" />
        <img src={isDarkMode ? '/x-dark.svg' : '/x.svg'} alt="Instagram" />
        <img src={isDarkMode ? '/linkedin-dark.svg' : '/linkedin.svg'} alt="Instagram" />
      </div>
    </div>
  </div>
  <div className={`${styles.content} ${isDarkMode ? styles.dark : ''}`}>
    <p>Всі права захищено</p>
  </div>
</div>
  );
};

export default Footer;
