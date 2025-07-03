// components/LoginScreen.js
import React, { useState } from 'react';
import {LoginPage} from './LoginPage';
import { imgs } from '../assets/images';
import '../styles/LoginChoice.css';

const LoginChoice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPhoneLogin, setShowPhoneLogin] = useState(false);

  const handleKakaoLogin = () => {
    setIsLoading(true);
    // 카카오 로그인 로직 시뮬레이션
    setTimeout(() => {
      setIsLoading(false);
      alert('카카오 로그인 구현 예정');
    }, 1500);
  };

  const handlePhoneLogin = () => {
    setShowPhoneLogin(true);
  };

  const handleMemberJoin = () => {
    alert('회원가입 페이지로 이동');
  };

  if (showPhoneLogin) {
    return <LoginPage />;
  }

  return (
    <div className="loginChoice-container">
      {/* 메인 콘텐츠 */}
      <div className="main-content">
        {/* 로고 */}
        <div>
          <img src={imgs.lenteeLogo} className = "logoImg" />
        </div>

        {/* 로그인 버튼들 */}
        <div className="login-buttons">
          {/* 카카오 ID 로그인 */}
          <button 
            onClick={handleKakaoLogin}
            disabled={isLoading}
            className={`kakao-login-btn ${isLoading ? 'loading' : ''}`}
          >
            {isLoading ? (
              <div className="loading-content">
                <div className="spinner"></div>
                <span>로그인 중...</span>
              </div>
            ) : (
              <div className="btn-content">
                <div className="kakao-icon">💬</div>
                <span>카카오 ID 로그인</span>
              </div>
            )}
          </button>

          {/* 휴대폰 번호 로그인 */}
          <button 
            onClick={handlePhoneLogin}
            className="phone-login-btn"
          >
            휴대폰 번호 로그인
          </button>
        </div>

        {/* 회원가입 링크 */}
        <div className="signup-section">
          <span className="signup-text">
            아직 계정이 없으신가요?{' '}
          </span>
          <button 
            onClick={handleMemberJoin}
            className="signup-link"
          >
            회원가입
          </button>
        </div>
      </div>

      {/* 하단 여백 */}
      <div className="bottom-spacer"></div>
    </div>
  );
};

export default LoginChoice;