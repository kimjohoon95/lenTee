import React, { useEffect, useState } from 'react';
import Splash from './pages/Splash';
import LoginChoice from './pages/LoginChoice';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2초 동안 Splash 보여주기
    const splashTimeout = setTimeout(() => {
      fetch('/api/hello')
        .then(response => response.text())
        .then(data => {
          setMessage(data);
          setLoading(false); // 메시지 다 받으면 splash 종료
        })
        .catch(error => {
          setMessage("에러 발생: " + error.message);
          setLoading(false);
        });
    }, 2000); // 2초 후 실행

    return () => clearTimeout(splashTimeout);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <LoginChoice />
  )
}

export default App;