import styles from './footer.module.css';
import {login, subscribeToNewNeeds} from "../../util/api";
import {useState} from "react";

const Footer = () => {
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
<div className={styles.footer}>
 
  <div className={styles.footerinfo}>
    <div className={styles.footeremail}>
      <div className={styles.footeremail1}>
        <p>
          Надішли свій Email та отримуй<br />
          сповіщення про нові запити
        </p>
      </div>
      <div className={styles.footeremail2}>
        <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="твій Email..."  onKeyDown={handleKeyDown} />
      </div>
    </div>
    <div className={styles.socialnet}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Логотип" />
          <div className={styles.logoText}> Допомога в дії </div>
        </div>
        <div className={styles.aboutus}>
          <p>Про нас</p>
          <p>Зареєструватись</p>
          <p>Потреби</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className={styles.icons}>
        <img src="/instagram.svg" alt="Instagram" />
        <img src="/facebook.svg" alt="Instagram" />
        <img src="/x.svg" alt="Instagram" />
        <img src="/linkedin.svg" alt="Instagram" />
      </div>
    </div>
  </div>
  <div className={styles.content}>
    <p>Всі права захищено</p>
  </div>
</div>
  );
};

export default Footer;
