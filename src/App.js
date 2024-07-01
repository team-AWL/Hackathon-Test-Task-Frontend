import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ResetPassword from './components/Forget/reset_password/page';
import SentEmailAgain from './components/Forget/sent_email_again/page';
import Forget from './components/Forget/page';
import Home from './components/Home/home';
import Login from './components/Login/page';
import Needs from './components/Needs/page';
import Registration from './components/Register/page';
import Registration1 from './components/Register/stage1/page';
import Registration2 from './components/Register/stage2/page';
import UserPage from './components/UserPage/page';
import Header from './extraComponents/Header/Header';
import Footer from './extraComponents/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
