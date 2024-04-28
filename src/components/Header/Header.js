'use client'
import {useEffect, useState} from 'react';
import styles from './header.module.css';
import { useRouter } from "next/navigation";
import {getCurrentUser} from "@/util/api";


const Header = () => {
  const router = useRouter();
  const [userAvatar, setUserAvatar] = useState('/Users/admin/Desktop/Hackathon-Test-Task-Frontend/public/person2.svg');
  const [hasAccessToken,setHasAccessToken] =  useState(!!localStorage.getItem('accessToken'));
  const handleLogOut = () => {
    const confirmLogout = window.confirm('Ви впевнені, що хочете вийти?');
    if (confirmLogout) {
      localStorage.removeItem('accessToken');
      setHasAccessToken(false)
      router.push("/login")
    }
  };
  const handleRedirectRegister = () =>{
    router.push('/register')

  }
  const handleRedirectLogin = () =>{
    router.push('/login')
  }

  useEffect(() => {
    if (hasAccessToken) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        getCurrentUserData(token).then(r => console.log(r));
      }
    }
  }, [hasAccessToken]);

  const getCurrentUserData = async (token) => {
    try {
      const userData = await getCurrentUser(token);
      console.log(userData.imageUrl)
      if(!(userData.imageUrl === null)){
        setUserAvatar(userData.imageUrl);
      }

    } catch (error) {
      console.error('Error getting current user data:', error);
    }
  };

  const handleLogoClick = () => {
    router.push('/');

  };

  const handleNeedsClick = () => {
    router.push('/needs');

  };

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={handleLogoClick}>
        <img src="/logo.svg" alt="Логотип" />
        <div className={styles.logoText}> Допомога в дії </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={handleNeedsClick}>Потреби</li>
          <li className={styles.navItem}>FAQ</li>
          <li className={styles.navItem}>Про нас</li>
        </ul>
      </nav>
      {hasAccessToken && userAvatar && (
          <div onClick={()=>router.push('/user-page')} className={styles.userProfile}>
            <img src={userAvatar} alt="User Avatar" className={styles.avatar} />
          </div>
      )}
      <img src="/sun-light.svg" alt="Sun Light" className={styles.sunLight} />
      <span className={styles.country}>UA</span>
      {hasAccessToken ? (
          <button onClick={handleLogOut} className={styles.loginButton}>Вийти</button>

      ) : (
          <>
            <button onClick={handleRedirectRegister} className={styles.registerButton}>Зареєструватись</button>
            <button onClick={handleRedirectLogin} className={styles.loginButton}>Увійти</button>
          </>
      )}
    </div>
  );
};

export default Header;