import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {BottomTabBar} from '../components/BottomTabBar';
import { imgs } from '../assets/images' 
import { icons } from '../assets/icons' 
import '../styles/MainHome.css'; 
import mainLogo from '../assets/lentee_logo.png'; 
import reviewButton from '../assets/reviewButton.png'; 

const MainHome = () => {
  const [activeTab, setActiveTab] = useState('home');

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);

 // 배너 이미지 데이터
  const bannerData = [
    {
      id: 1,
      title: "신상품 출시",
      subtitle: "최대 50% 할인",
      backgroundColor: "#FF6B6B",
      textColor: "white"
    },
    {
      id: 2,
      title: "여름 시즌 특가",
      subtitle: "무료배송 이벤트",
      backgroundColor: "#4ECDC4",
      textColor: "white"
    },
    {
      id: 3,
      title: "회원 전용 혜택",
      subtitle: "추가 쿠폰 증정",
      backgroundColor: "#45B7D1",
      textColor: "white"
    },
    {
      id: 4,
      title: "기간 한정 이벤트",
      subtitle: "지금 바로 확인하세요",
      backgroundColor: "#96CEB4",
      textColor: "white"
    }
  ];

  // 자동 슬라이드 (드래그 중이 아닐 때만)
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bannerData.length, isDragging]);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  // 터치/마우스 이벤트 핸들러
  const handleBannerStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
    setTranslateX(0);
  };

  const handleBannerMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = clientX - startX;
    setTranslateX(deltaX);
  };

  const handleBannerEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // 스와이프 거리가 50px 이상이면 슬라이드 변경
    if (Math.abs(translateX) > 50) {
      if (translateX > 0) {
        // 오른쪽으로 스와이프 - 이전 슬라이드
        setCurrentSlide(prev => prev === 0 ? bannerData.length - 1 : prev - 1);
      } else {
        // 왼쪽으로 스와이프 - 다음 슬라이드
        setCurrentSlide(prev => (prev + 1) % bannerData.length);
      }
    }
    
    setTranslateX(0);
  };

  const products = [
    {
      id: 1,
      name: '결혼식장에서 입기 좋은 블라우스',
      category: '결혼식작 > 블라우스',
      subtitle: 'VAlANTINO',
      price: '29,000원',
      image: imgs.sampleImg1,
      isNew: true,
    },
    {
      id: 2,
      name: '결혼식장에서 입기 좋은 정장',
      category: '결혼식작 > 정장',
      subtitle: 'VAlANTINO',
      price: '35,000원',
      image: imgs.sampleImg2,
      isHot: true,
    },
    {
      id: 3,
      name: '결혼식장에서 입기 좋은 치마',
      category: '결혼식작 > 치마',      
      subtitle: 'VAlANTINO',
      price: '10,000원',
      image: imgs.sampleImg3,
    },
    {
      id: 4,
      name: '결혼식장에서 입기 좋은 블라우스',
      category: '결혼식작 > 블라우스',      
      subtitle: 'VAlANTINO',
      price: '29,000원',
      image: imgs.sampleImg1,
      isRecommended: true,
    },
  ];

  const mainProducts = [
    {
      id: 1,
      name: '결혼식장에 입을 블라우스',
      rentStatus: 'AVAILABLE',
      category: '결혼식작 > 블라우스',
      subtitle: 'VAlANTINO',
      price: '29,000원',
      image: imgs.sampleImg1,
      isNew: true,
    },
    {
      id: 2,
      name: '결혼식장에서 입기 좋은 정장',
      rentStatus: 'WAIT',
      category: '결혼식작 > 정장',
      subtitle: 'VAlANTINO',
      price: '35,000원',
      image: imgs.sampleImg2,
      isHot: true,
    },
    {
      id: 3,
      name: '결혼식장에서 입기 좋은 치마',
      rentStatus: 'WAIT',
      category: '결혼식작 > 치마',
      subtitle: 'VAlANTINO',
      price: '10,000원',
      image: imgs.sampleImg3,
    },
    {
      id: 4,
      name: '데이트 할 때 사용 할 키링',
      rentStatus: 'RENT',
      category: '데이트 > 키링',
      subtitle: 'VAlANTINO',
      price: '29,000원',
      image: imgs.sampleImg4,
      isRecommended: true,
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

   const handleWriteReview = () => {
    alert('후기 작성 화면으로 이동합니다!');
    // 실제 구현에서는 후기 작성 페이지로 라우팅
    // navigate('/write-review');
  };

  const navigate = useNavigate();
  const clickProductDetail = (id) => {
    navigate(`/ProductDetail/${id}`);
  }

  return (
    <div className="home-container">
      {/* 헤더 */}
      <div className="home-header">
        <img src={mainLogo} className="logo" />
        {/* <div className="logo">LenTEE</div> */}
        <img src={icons.search} className="search-icon"/>
      </div>

      {/* 메인 배너 */}
      <div className="main-banner">
        <div 
          ref={sliderRef}
          className="banner-slider"
          onMouseDown={handleBannerStart}
          onMouseMove={handleBannerMove}
          onMouseUp={handleBannerEnd}
          onMouseLeave={handleBannerEnd}
          onTouchStart={handleBannerStart}
          onTouchMove={handleBannerMove}
          onTouchEnd={handleBannerEnd}
        >
          <div
            className="banner-wrapper"
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% / ${bannerData.length} + ${isDragging ? translateX : 0}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
            }}
          >
            {bannerData.map((banner, index) => (
              <div
                key={banner.id}
                className="banner-slide"
                style={{
                  backgroundColor: banner.backgroundColor,
                  color: banner.textColor
                }}
              >
                <div className="banner-decoration-1" />
                <div className="banner-decoration-2" />
                
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-subtitle">{banner.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="banner-indicators">
          {bannerData.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      {/* 카테고리 섹션 */}
      <div className="category-section">
        <div className="category-grid">
          <div className="category-item">
            <img src={imgs.companyImg} className="category-icon"/>
            <span className="category-text">회사</span>
          </div>
          <div className="category-item">
            <img src={imgs.mettingImg} className="category-icon"/>
            <span className="category-text">면접</span>
          </div>
          <div className="category-item">
            <img src={imgs.stageImg} className="category-icon"/>
            <span className="category-text">결혼식장</span>
          </div>
          <div className="category-item">
            <img src={imgs.dateImg} className="category-icon"/>
            <span className="category-text">데이트</span>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="main-content">
        {/* 최근 본 상품 */}
        <div className="section">
          <div className="section-header">
            <h2 className="section-title">홍길동님이 최근 본 상품이에요</h2>
            <button className="view-all">전체보기
              <img src={icons.viewAll} className="view-all-icon" />
            </button>
          </div>
          <div className="product-grid-horizontal">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="product-card-small" onClick={() => clickProductDetail(product.id)} >
                <img src={product.image} className="product-image-small"/>
                <div className="product-info-small">
                  <p className="store-name">{product.category}</p>
                  <p className="product-name-small">{product.name}</p>
                  <p className="product-subtitle-small">{product.subtitle}</p>
                  <p className="product-price-small">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 추천 상품 */}
        <div className="section">
          <h2 className="section-title">홍길동님을 위한 추천 상품</h2>
          <div className="product-grid">
            {mainProducts.map((mainProducts) => (
              <div key={mainProducts.id} className="product-card">
                {mainProducts.isNew && <span className="badge new">NEW</span>}
                {mainProducts.isHot && <span className="badge hot">HOT</span>}
                {mainProducts.isRecommended && <span className="badge recommended">추천</span>}
                <img src={mainProducts.image} className="product-image"/>
                <div className="product-info">
                  {mainProducts.rentStatus === 'RENT' && (
                    <p className="rent rented">대여중</p>
                  )}
                  {mainProducts.rentStatus === 'AVAILABLE' && (
                    <p className="rent available">대여가능</p>
                  )}
                   {mainProducts.rentStatus === 'WAIT' && (
                    <p className="rent wait">대여대기</p>
                  )}
                  <p className="store-name">{mainProducts.category}</p>
                  <p className="product-name">{mainProducts.name}</p>
                  <p className="product-subtitle">{mainProducts.subtitle}</p>
                  <p className="product-price">{mainProducts.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 플로팅 후기 작성 버튼 */}
      <div className="floating-review-button" onClick={handleWriteReview}>
      <img src={reviewButton} className="floating-button-icon" /> 
      </div>

      {/* 하단 탭바*/}
     <BottomTabBar />
    </div>
  );
};

export default MainHome