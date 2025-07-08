// components/ProductDetail.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MessageCircle, Share } from 'lucide-react';
import '../styles/ProductDetail.css';
import { icons } from '../assets/icons/productDetail'
import { imgs } from '../assets/images/productDetail'

const ProductDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const [selectedImage, setSelectedImage] = useState(0);

  // 상품 데이터
  const product = {
    id: 1,
    name: '깔끔한 실키 리본 셔츠 블라우스 대여 해드립니다',
    price: '29,000원',
    seller: {
      name: '귀여운 쿼카',
      rating: 'Lv 5, 찢어진 청바지',
      avatar: imgs.profilSample
    },
    size: 'S (90~95)',
    tradeType: '직거래',
    tradeRegion: '부천',
    condition: '일반',
    description: '구매 후 한 번 입었던 옷입니다.\n오른쪽 소매에 실밥이 조금 풀려 있습니다.',
    images: [
      { id: 'productImg', type : 'main', url: imgs.sampleImg, alt: '메인 상품 이미지' },
      { id: 'productDetailImg', type : 'detail', url: imgs.productStatusSample, alt: '상품 디테일 이미지' },
      { id: 'productDetailImg2', type : 'detail' , url: imgs.productStatusSample2, alt: '상품 디테일 이미지' }
    ],
    rentStatus : 'AVAILABLE',
    priceOfferStatus : 'POSSIBLE',
    productStatus : '갓성B급',
    productStatusDs : '약간의 얼룩, 올 풀림, 탈색 등이 있음',
    tags: ['구찌', '하얀색', '결혼식장'],
    countLike: 123
  };
  // 추천 상품들
  const recommendedProducts = [
    {
      id: 1,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      category: '데이트 > 키링',
      image: imgs.recommandSample,
      rentStatus : 'AVAILABLE'
    },
    {
      id: 2,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      category: '데이트 > 키링',
      image: imgs.recommandSample2,
      rentStatus : 'WAIT'
    },
    {
      id: 3,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      category: '데이트 > 키링',
      image: imgs.recommandSample,
      rentStatus : 'AVAILABLE'
    },
    {
      id: 4,
      name: '피자곰 에듀케이션 더베어론트',
      subtitle: 'MOUNTAIN CLIMBING BEAR',
      price: '29,000원',
      category: '데이트 > 키링',
      image: imgs.recommandSample2,
      rentStatus : 'RENT'
    }
  ];
  const navigate = useNavigate();

  const handleBackClick = () => {
    // console.log('뒤로가기');
    navigate('/MainHome');
  };

  const handleShareClick = () => {
    openModal();
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
      {/* 헤더 */}
      <div className="product-detail__header">
        <button className="product-detail__back-btn" onClick={handleBackClick}>
          <img src = {icons.backPageIcon}/>
        </button>
        <button className="product-detail__share-btn" onClick={openModal}>
          <img src = {icons.shareIcon}/>
        </button>
      </div>

      <div className="product-detail__content">
        {/* 상품 이미지 */}
        <div className="product-detail__image-section">
          <div>
            <img src={product.images.find(img => img.type === 'main')?.url}
                alt={product.images.find(img => img.type === 'main')?.alt || '상품 이미지'}
                className="product-detail__main-image"/>
          </div>
        </div>

        {/* 판매자 정보 */}
        <div className="product-detail__seller-info">
          <div className="product-detail__seller-avatar">
            <img src = {product.seller.avatar} />
          </div>
          <div className="product-detail__seller-details">
            <h3 className="product-detail__seller-name">{product.seller.name}</h3>
            <p className="product-detail__seller-rating">{product.seller.rating}</p>
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="product-detail_info">
          <div className="product-detail_label">
            {product.rentStatus === 'RENT' && (
              <p className="rent rented">대여중</p>
            )}
            {product.rentStatus === 'AVAILABLE' && (
              <p className="rent available">대여가능</p>
            )}
            {product.rentStatus === 'WAIT' && (
              <p className="rent wait">대여대기</p>
            )}
             {product.priceOfferStatus === 'POSSIBLE' && (
              <p className="priceOffer possible">가격제안가능</p>
            )}
          </div>
          <p className="product-detail__breadcrumb">의류여성 › 블라우스</p>
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">{product.price}</p>
          <button className="product-detail__chat-btn" onClick={handleChatClick}>
            총 4회 대여가 진행된 상품입니다.
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
              <span className="product-detail__detail-label">거래 방식</span>
              <span className="product-detail__detail-value">{product.tradeType}</span>
            </div>
            <div className="product-detail__detail-item">
              <span className="product-detail__detail-label">거래지역</span>
              <span className="product-detail__detail-value">{product.tradeRegion}</span>
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
            <span className="product-detail__condition-text">{product.productStatus}</span>
          </div>
          <span className="product-detail__condition-desc">{product.productStatusDs}</span>
          <div className="product-detail__condition-images">
            {product.images
              .filter(img => img.type === 'detail')
              .map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={img.alt || `상품 상세 이미지 ${index + 1}`}
                  className="product-detail__condition-image"
                />
            ))}
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
                  <img src={item.image} className="product-detail__recommended-img"/>
                </div>
                <div className="product-detail__recommended-info">
                  {item.rentStatus === 'RENT' && (
                    <p className="rent rented">대여중</p>
                  )}
                  {item.rentStatus === 'AVAILABLE' && (
                    <p className="rent available">대여가능</p>
                  )}
                  {item.rentStatus === 'WAIT' && (
                    <p className="rent wait">대여대기</p>
                  )}
                  <p className="product-detail__recommended-category">{item.category}</p>
                  <h3 className="product-detail__recommended-name">{item.name}</h3>
                  <p className="product-detail__recommended-subtitle">{item.subtitle}</p>
                  <p className="product-detail__recommended-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      {/* 모달 오버레이 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className={`modal-content ${isModalOpen ? 'modal-open' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="modal-header">
              <h3 className="modal-title">공유 방법 선택</h3>
              <button onClick={closeModal} className="modal-close-btn">
                <X className="icon-24" />
              </button>
            </div>

            {/* 모달 콘텐츠 */}
            <div className="modal-body">
              <button className="modal-option">
                <MessageCircle className="icon-20" />
                <span>카카오톡으로 공유</span>
              </button>
              
              <button className="modal-option">
                <Share className="icon-20" />
                <span>링크로 공유</span>
              </button>
            </div>

            {/* 하단 여백 */}
            <div className="modal-footer"></div>
          </div>
        </div>
      )}
      </div>

      {/* 하단 고정 버튼 */}
      <div className="product-detail bottom-bar">
        <button 
          className={`product-detail like-btn ${isLiked ? 'product-detail__like-btn--active' : ''}`}
          onClick={handleLikeClick}
        >
          <span className="product-detail__like-icon"></span>
          <span className="product-detail__like-count">{product.countLike}</span>
        </button>
        <button className="product-detail__buy-btn" onClick={handleBuyClick}>
          채팅하기
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;