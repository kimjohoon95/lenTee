import React, { useState } from 'react';
import '../styles/LoginPage.css'; 
import {MainHome} from './MainHome';

export const LoginPage = ({ onLogin, onBack, onForgotPassword }) => {
  const [currentScreen, setCurrentScreen] = useState('login'); // 'login' or 'home'
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!phone.trim()) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }
    if (!password.trim()) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    setIsLoading(true);

    try {
      // Spring Boot API 호출 시뮬레이션
      // 실제 환경에서는 아래 주석을 해제하고 사용
      /*
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          password: password,
          rememberMe: rememberMe
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setCurrentScreen('home');
      } else {
        alert(data.message || '로그인에 실패했습니다.');
      }
      */
      
      // 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1500));
      setCurrentScreen('home'); // 메인 화면으로 이동
      
    } catch (error) {
      console.error('로그인 오류:', error);
      alert('네트워크 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    console.log('뒤로가기');
  };

  const handleForgotPassword = () => {
    console.log('비밀번호 재설정');
  };

  // 메인 화면 렌더링
  if (currentScreen === 'home') {
    return <MainHome />;
  };

  return (
    <div className="login-container">
      {/* 헤더 */}
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          <span className="back-icon">‹</span>
        </button>
        <h1 className="header-title">휴대폰 번호로 로그인</h1>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="main-content">
        {/* 휴대폰 번호 입력 */}
        <div className="input-section">
          <label className="input-label">휴대폰 번호</label>
          <input
            type="tel"
            className="input-field"
            placeholder="휴대폰 번호를 입력해주세요"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="input-section">
          <label className="input-label">비밀번호</label>
          <input
            type="password"
            className="input-field"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 자동 로그인 체크박스 */}
        <div className="checkbox-section">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="checkbox-text">자동 로그인</span>
          </label>
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="bottom-section">
        <button
          className={`login-button ${isLoading ? 'loading' : ''}`}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? '로그인 중...' : '로그인'}
        </button>

        <div className="forgot-password-section">
          <span className="forgot-text">비밀번호를 잊으셨나요?</span>
          <button className="forgot-button" onClick={handleForgotPassword}>
            
            비밀번호 재설정
          </button>
        </div>
      </div>
    </div>
  );
};
