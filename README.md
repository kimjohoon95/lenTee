# 👕 lenTee – 의류 렌탈 서비스

**lenTee(렌티)**는 최신 패션을 합리적인 가격에 즐길 수 있는 **의류 렌탈 플랫폼**입니다.  
웹/모바일 환경에서 사용자에게 다양한 상품을 보여주고, 렌탈 신청 → 결제 → 반납까지 **원스톱 경험**을 제공합니다.

---

## 🛠 핵심 기능

- **🧑‍💼 사용자**
  - 회원가입 및 로그인 (SNS 연동 가능)
  - 상품 검색, 필터링, 카테고리별 탐색
  - 대여기간 선택, 장바구니 → 결제 기능
  - 대여 내역 확인 및 반납 요청

- **👔 관리자**
  - 상품 등록/수정/삭제
  - 재고 및 렌탈 상태 관리
  - 주문·반납 처리 및 통계 분석 대시보드

---

## 🧩 사용 기술 스택

| 분야       | 기술 및 라이브러리 |
| 프론트엔드 - React, Redux, Tailwind CSS 
| 백엔드 - Spring Boot, JPA, MySQL 
| 인증 - JWT(카카오, 네이버 등) 
| CI/CD - GitHub Actions 

---

## 🖼️ UI/UX 디자인 — Figma

서비스 전체 플로우는 Figma로 설계하였으며, 주요 화면은 아래와 같습니다:

<details>
  <summary>🖼️ 스플래시 화면 보기</summary>
  <br>
  <img src="./docs/images/스플래시/MO_스플래시.png" width="200" alt="스플래시 화면">
</details>

<details>
  <summary>🖼️ 서비스 시작 화면 </summary>
  <br>
  <img src="./docs/images/서비스시작/MO_서비스시작.png" width="200" alt="서비스 시작 화면">
</details>

<details>
  <summary>🖼️ 로그인 화면 </summary>
  <br>
  <img src="./docs/images/로그인/MO_카카오 ID로 로그인.png" width="200" alt="로그인 화면">
  <img src="./docs/images/로그인/MO_휴대폰 번호로 로그인.png" width="200" alt="로그인 화면">
  <img src="./docs/images/로그인/MO_휴대폰 번호로 로그인2.png" width="200" alt="로그인 화면">
  <img src="./docs/images/로그인/MO_휴대폰 번호로 로그인3.png" width="200" alt="로그인 화면">
</details>

<details>
  <summary>🖼️ 회원가입 화면 </summary>
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 본인인증 ] </span>

  <br>
  <img src="./docs/images/회원가입/MO_본인인증-1.png" width="200" alt="회원가입 화면">
  <img src="./docs/images/회원가입/MO_본인인증-2.png" width="200" alt="회원가입 화면">
  <img src="./docs/images/회원가입/MO_본인인증-3.png" width="200" alt="회원가입 화면">
  <img src="./docs/images/회원가입/MO_본인인증.png" width="200" alt="회원가입 화면">
  
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 서비스 환영 ] </span>

  <br>
  <img src="./docs/images/회원가입/MO_서비스 환영.png" width="200" alt="회원가입 화면">

  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 약관 동의 ] </span>
  <br>
  <img src="./docs/images/회원가입/MO_약관동의-1.png" width="200" alt="회원가입 화면">
  <img src="./docs/images/회원가입/MO_약관동의.png" width="200" alt="회원가입 화면">

  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 프로필 등록 ]</span>

  <br>
  <img src="./docs/images/회원가입/MO_프로필 사진 등록.png" width="200" alt="회원가입 화면">
  <img src="./docs/images/회원가입/MO_프로필 입력.png" width="200" alt="회원가입 화면">
</details>

<details>
  <summary>🖼️ 비밀번호 재설정 화면 </summary>
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 비밀번호 재설정 팝업 ] </span>

  <br>
  <img src="./docs/images/비밀번호재설정/ENT-510-popup1 비밀번호 재설정 취소 팝업.png" width="200" alt="비밀번호 재설정 화면">
  <img src="./docs/images/비밀번호재설정/ENT-510-popup2 인증번호 재요청 팝업.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/ENT-510-popup3 인증번호 재발송 팝업 노출.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/ENT-510-popup4 비밀번호 재설정 완료 팝업.png" width="200" alt="비밀번호재설정 화면">
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 비밀번호 본인인증 ] </span>

  <br>
  <img src="./docs/images/비밀번호재설정/MO_본인인증.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/MO_본인인증2.png" width="200" alt="비밀번호재설정 화면">
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 비밀번호 입력 ] </span>

  <br>
  <img src="./docs/images/비밀번호재설정/MO_비밀번호 입력.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/MO_비밀번호 입력2.png" width="200" alt="비밀번호재설정 화면">
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 비밀번호 재설정 ] </span>

  <br>
  <img src="./docs/images/비밀번호재설정/비밀번호_재설정-1.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/비밀번호_재설정-2.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/비밀번호_재설정-3.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/비밀번호_재설정-4.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/비밀번호_재설정-5.png" width="200" alt="비밀번호재설정 화면">
  <img src="./docs/images/비밀번호재설정/비밀번호_재설정.png" width="200" alt="비밀번호재설정 화면">
</details>

<details>
  <summary>🖼️ 메인 화면 </summary>
  <br>
  <img src="./docs/images/메인/MO_main.png" width="200" alt="메인 화면">
</details>

<details>
  <summary>🖼️ 게시글 상세 화면</summary>
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 게시글 상세 ] </span>

  <br>
  <img src="./docs/images/게시글상세/MO_게시글 상세-1.png" width="200" alt="MO_게시글 상세-1">
  <img src="./docs/images/게시글상세/MO_게시글 상세-1.png" width="200" alt="MO_게시글 상세-1">
  <img src="./docs/images/게시글상세/MO_게시글 상세-1.png" width="200" alt="MO_게시글 상세-1">
  <img src="./docs/images/게시글상세/MO_게시글 상세-1.png" width="200" alt="MO_게시글 상세-1">
  <img src="./docs/images/게시글상세/MO_게시글 상세.png" width="200" alt="MO_게시글 상세">
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 게시글 후기 작성 ] </span>

  <br>
  <img src="./docs/images/게시글상세/게시글 작성-1.png" width="200" alt="게시글 작성-1">
  <img src="./docs/images/게시글상세/게시글 작성.png" width="200" alt="게시글 작성">
  <br>
  <span style = "font-size: 1.5em; font-weight: bold;"> [ 게시글 조회 ] </span>

  <br>
  <img src="./docs/images/게시글상세/게시글 조회-1.png" width="200" alt="게시글 조회-1">
  <img src="./docs/images/게시글상세/게시글 조회-2.png" width="200" alt="게시글 조회-2">
  <img src="./docs/images/게시글상세/게시글 조회-3.png" width="200" alt="게시글 조회-3">
  <img src="./docs/images/게시글상세/게시글 조회-4.png" width="200" alt="게시글 조회-4">
  <img src="./docs/images/게시글상세/게시글 조회.png" width="200" alt="게시글 조회">

</details>

<details>
  <summary>🖼️ 게시글등록 화면</summary>
  <br>
  <img src="./docs/images/게시글등록/게시글 작성-1.png" width="200" alt="게시글 작성-1">
  <img src="./docs/images/게시글등록/게시글 작성.png" width="200" alt="게시글 작성">
</details>

## 🚀 실행 및 배포

```bash
# 저장소 클론 및 백엔드 실행
git clone https://github.com/kimjohoon95/lenTee.git
cd backend
./gradlew bootRun

# 프론트엔드 실행 (별도 터미널)
cd ../frontend
npm install
npm start