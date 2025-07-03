import React, { useState, useEffect } from 'react';
import '../styles/BottomTabBar.css';
import { icons } from '../assets/icons'; 
export const BottomTabBar = () => {
  // 현재 경로(pathname)를 기준으로 active 탭 결정
  const [activeTab, setActiveTab] = useState(getCurrentPath());

  // 탭 정의
  const tabItems = [
    { key: 'home', icon: icons.home , label: '홈', path: '/MainHome' },
    { key: 'category', icon: icons.category , label: '카테고리', path: '/category' },
    { key: 'chat', icon: icons.chat , label: '채팅', path: '/search' },
    { key: 'wishlist', icon: icons.wishlist , label: '럽티', path: '/wishlist' },
    { key: 'mypage', icon: icons.mypage , label: '마이페이지', path: '/mypage' },
  ];

  // 현재 주소를 기반으로 어떤 탭이 active인지 판단
  function getCurrentPath() {
    const pathname = window.location.pathname;
    if (pathname === '/' || pathname === 'MainHome') return 'home';
    if (pathname.startsWith('/category')) return 'category';
    if (pathname.startsWith('/chat')) return 'chat';
    if (pathname.startsWith('/wishlist')) return 'wishlist';
    if (pathname.startsWith('/mypage')) return 'mypage';
    return 'home';
  }

  // 주소가 바뀌었을 때 자동으로 activeTab 업데이트
  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getCurrentPath());
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // 탭 클릭 시 경로 변경
  const handleTabClick = (tab) => {
    if (activeTab === tab.key) return;
    window.location.href = tab.path;
  };

  return (
    <div className="bottom-tab-bar">
      {tabItems.map((tab) => (
        <div
          key={tab.key}
          className={`tab-item ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          <img src={tab.icon} alt={tab.label} className="tab-icon"/>
        </div>
      ))}
    </div>
  );
};
