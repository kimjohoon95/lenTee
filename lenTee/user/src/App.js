// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Splash, LoginChoice, MainHome, ProductDetail } from './pages'; // ✅ 이렇게 한 줄로!

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      fetch('/api/hello')
        .then(response => response.text())
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, []);

  if (loading) return <Splash />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginChoice />} />
        <Route path="/main" element={<MainHome />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
