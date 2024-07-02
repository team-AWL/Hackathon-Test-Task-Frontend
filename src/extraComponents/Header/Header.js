import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../store';
import { getCurrentUser } from '../../util/api';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDarkMode);
  const [userAvatar, setUserAvatar] = useState('/person2.svg');
  const [hasAccessToken, setHasAccessToken] = useState(!!localStorage.getItem('accessToken'));

  const handleLogOut = () => {
    const confirmLogout = window.confirm(t('logout_confirmation'));
    if (confirmLogout) {
      localStorage.removeItem('accessToken');
      setHasAccessToken(false);
      navigate("/login");
    }
  };

  const handleRedirectRegister = () => {
    navigate('/register');
  };

  const handleRedirectLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (hasAccessToken) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        getCurrentUserData(token);
      }
    }
  }, [hasAccessToken]);

  const getCurrentUserData = async (token) => {
    try {
      const userData = await getCurrentUser(token);
      if (userData.imageUrl !== null) {
        setUserAvatar(userData.imageUrl);
      }
    } catch (error) {
      console.error('Error getting current user data:', error);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNeedsClick = () => {
    navigate('/needs');
  };

  const handleSunClick = () => {
    dispatch(toggleTheme());
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ua' ? 'en' : 'ua';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={`${styles.header} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src={isDarkMode ? '/logo-dark.svg' : '/logo.svg'} alt="Логотип" />
        <div className={styles.logoText}>{t('help_in_action')}</div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem} style={{ cursor: "pointer" }} onClick={handleNeedsClick}>{t('needs')}</li>
          <li className={styles.navItem}>{t('faq')}</li>
          <li className={styles.navItem}>{t('about_us')}</li>
        </ul>
      </nav>
      {hasAccessToken && userAvatar && (
        <div onClick={() => navigate('/user-page')} className={styles.userProfile}>
          <img src={userAvatar} alt="User Avatar" className={styles.avatar} />
        </div>
      )}
      <img
        src={isDarkMode ? '/moon.svg' : '/sun-light.svg'}
        alt={isDarkMode ? 'Moon Light' : 'Sun Light'}
        className={styles.sunLight}
        onClick={handleSunClick}
      />
      <span className={styles.country} onClick={toggleLanguage}>
        {i18n.language === 'ua' ? 'UA' : 'EN'}
      </span>
      {hasAccessToken ? (
        <button onClick={handleLogOut} className={`${styles.loginButton} ${isDarkMode ? styles.dark : ''}`}>{t('logout')}</button>
      ) : (
        <>
          <button onClick={handleRedirectRegister} className={`${styles.registerButton} ${isDarkMode ? styles.dark : ''}`}>{t('register')}</button>
          <button onClick={handleRedirectLogin} className={`${styles.loginButton} ${isDarkMode ? styles.dark : ''}`}>{t('login')}</button>
        </>
      )}
    </div>
  );
};

export default Header;
