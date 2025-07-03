// components/ProductDetail.js
import React, { useState } from 'react';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // 상품 데이터
  const product = {
    id: 1,
    name: '깔끔한 실키 리본 셔츠 블라우스 디테일드입니다',
    price: '29,000원',
    seller: {
      name: '귀여운 쥐가',
      rating: 'Lv 5, 물어보실 일마이',
      avatar: '🐭'
    },
    size: 'S (90~95)',
    material: '폴리',
    color: '화이트',
    condition: '일반',
    description: '귀엽고 오픈 리본젓이 즐거진니다.\n오픈룩 스핏에 컬하적 조각 젖어 벗습니다.',
    images: [
      { id: 1, url: '👚', alt: '메인 상품 이미지' },
      { id: 2, url: '🔍', alt: '상품 디테일 이미지' }
    ],
    tags: ['탑/블라우스', '드레푸리벤', '캐주얼코감']
  };

  // 추천 상품들
  const recommendedProducts = [
    {
      id: 1,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      image: '🧸',
      badge: '새상품',
      badgeColor: 'green'
    },
    {
      id: 2,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      image: '🦊',
      badge: '예약판매',
      badgeColor: 'red'
    },
    {
      id: 3,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      image: '🧸',
      badge: '새상품',
      badgeColor: 'green'
    },
    {
      id: 4,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      image: '🧸',
      badge: '택배',
      badgeColor: 'gray'
    }
  ];

  const handleBackClick = () => {
    console.log('뒤로가기');
    // navigate(-1) 또는 뒤로가기 로직
  };

  const handleShareClick = () => {
    console.log('공유하기');
  };

  const handleChatClick = () => {
    console.log('판매자와 채팅');
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleBuyClick = () => {
    console.log('구매하기');
  };

  const handleRecommendedProductClick = (productId) => {
    console.log('추천 상품 클릭:', productId);
  };

  return (
    <div className="product-detail">
      {/* 상태바 */}
      <div className="product-detail__status-bar">
        <span>9:41</span>
        <div className="product-detail__status-icons">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* 헤더 */}
      <div className="product-detail__header">
        <button className="product-detail__back-btn" onClick={handleBackClick}>
          ←
        </button>
        <button className="product-detail__share-btn" onClick={handleShareClick}>
          ↗
        </button>
      </div>

      <div className="product-detail__content">
        {/* 상품 이미지 */}
        <div className="product-detail__image-section">
          <div className="product-detail__main-image">
            <span className="product-detail__image-placeholder">👚</span>
          </div>
        </div>

        {/* 판매자 정보 */}
        <div className="product-detail__seller-info">
          <div className="product-detail__seller-avatar">{product.seller.avatar}</div>
          <div className="product-detail__seller-details">
            <h3 className="product-detail__seller-name">{product.seller.name}</h3>
            <p className="product-detail__seller-rating">{product.seller.rating}</p>
          </div>
          <button className="product-detail__follow-btn">
            팔로잉 가능 여부
          </button>
        </div>

        {/* 상품 정보 */}
        <div className="product-detail__product-info">
          <p className="product-detail__breadcrumb">의류여성 › 블라우스</p>
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">{product.price}</p>
          
          <button className="product-detail__chat-btn" onClick={handleChatClick}>
            🗨 4명 대화고 진행중 상황입니다
          </button>
        </div>

        {/* 상세 정보 */}
        <div className="product-detail__details">
          <h2 className="product-detail__section-title">상세정보</h2>
          <div className="product-detail__detail-grid">
            <div className="product-detail__detail-item">
              <span className="product-detail__detail-label">사이즈</span>
              <span className="product-detail__detail-value">{product.size}</span>
            </div>
            <div className="product-detail__detail-item">
              <span className="product-detail__detail-label">기질 및 질</span>
              <span className="product-detail__detail-value">{product.material}</span>
            </div>
            <div className="product-detail__detail-item">
              <span className="product-detail__detail-label">기질 수체</span>
              <span className="product-detail__detail-value">{product.color}</span>
            </div>
          </div>
          
          <p className="product-detail__description">{product.description}</p>
          
          <div className="product-detail__tags">
            {product.tags.map((tag, index) => (
              <span key={index} className="product-detail__tag">#{tag}</span>
            ))}
          </div>
        </div>

        {/* 상품 상태 */}
        <div className="product-detail__condition">
          <h2 className="product-detail__section-title">상품 상태</h2>
          <div className="product-detail__condition-badge">
            <span className="product-detail__condition-text">깨끗함</span>
            <span className="product-detail__condition-desc">역시한 윤식 좋틱 능력이 월화적으로음</span>
          </div>
          
          <div className="product-detail__condition-images">
            <div className="product-detail__condition-image">🔍</div>
            <div className="product-detail__condition-image">👕</div>
          </div>
        </div>

        {/* 추천 상품 */}
        <div className="product-detail__recommendations">
          <h2 className="product-detail__section-title">홍길동님을 위한 추천 상품</h2>
          <div className="product-detail__recommended-grid">
            {recommendedProducts.map((item) => (
              <div 
                key={item.id} 
                className="product-detail__recommended-item"
                onClick={() => handleRecommendedProductClick(item.id)}
              >
                <div className="product-detail__recommended-image">
                  <span className={`product-detail__recommended-badge product-detail__recommended-badge--${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <div className="product-detail__recommended-img">{item.image}</div>
                </div>
                <div className="product-detail__recommended-info">
                  <p className="product-detail__recommended-category">데이트 › 기타</p>
                  <h3 className="product-detail__recommended-name">{item.name}</h3>
                  <p className="product-detail__recommended-subtitle">{item.subtitle}</p>
                  <p className="product-detail__recommended-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="product-detail__bottom-bar">
        <button 
          className={`product-detail__like-btn ${isLiked ? 'product-detail__like-btn--active' : ''}`}
          onClick={handleLikeClick}
        >
          <span className="product-detail__like-icon">{isLiked ? '❤️' : '🤍'}</span>
          <span className="product-detail__like-count">1/3</span>
        </button>
        <button className="product-detail__buy-btn" onClick={handleBuyClick}>
          채팅하기
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;