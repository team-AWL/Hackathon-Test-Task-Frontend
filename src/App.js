import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ResetPassword from './components/Forget/reset_password/page';
import SentEmailAgain from './components/Forget/sent_email_again/page';
import Forget from './components/Forget/page';
import Login from './components/Login/page';
import Needs from './components/Needs/page';
import Registration from './components/Register/page';
import Registration1 from './components/Register/stage1/page';
import Registration2 from './components/Register/stage2/page';
import UserPage from './components/UserPage/page';
import CustomScrollbar from '../src/util/custom-scrollbar';
import Loader from './util/loader';

const Home = lazy(() => import('./components/Home/home'));
const Header = lazy(() => import('./extraComponents/Header/Header'));
const Footer = lazy(() => import('./extraComponents/Footer/Footer'));

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t('page_title');
  }, [i18n.language]);

  return (
    <Router>
      <CustomScrollbar>
        <Suspense fallback={<Loader />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/sent-email-again" element={<SentEmailAgain />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/needs" element={<Needs />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/register/stage1" element={<Registration1 />} />
            <Route path="/register/stage2" element={<Registration2 />} />
            <Route path="/user-page" element={<UserPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </CustomScrollbar>
    </Router>
  );
}

export default App;
