import React, { useState } from 'react';
import '../styles/LoginPage.css'; 

const LoginPage = () => {
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('로그인 성공! (시뮬레이션)');
    } catch {
      alert('로그인 실패: 네트워크 오류');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>휴대폰 번호로 로그인</h1>

      <div className="input-group">
        <label>휴대폰 번호</label>
        <input
          type="tel"
          placeholder="휴대폰 번호를 입력해주세요"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>비밀번호</label>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          자동 로그인
        </label>
      </div>

      <button
        className="login-button"
        onClick={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </button>

      <button
        className="forgot-button"
        onClick={() => alert('비밀번호 재설정 페이지로 이동')}
      >
        비밀번호 재설정
      </button>
    </div>
  );
};

export default LoginPage;