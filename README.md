# MarketKurly

## ☑️요약

### 항해99 6기, 9조 클론코딩

**클론 대상 사이트** : [마켓컬리](https://www.kurly.com/shop/main/index.php?utm_source=1055&utm_medium=2202&utm_campaign=home_hashtag&utm_term=&gclid=Cj0KCQiA09eQBhCxARIsAAYRiymFTo_B-h_Ud0gO_bvKSG36IaBralIpgBFdb2WKsfT25LH5s8RrK-4aAm26EALw_wcB#%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC&utm_content=brand)

📸 **클론 페이지** : 로그인, 회원가입, 메인, 장바구니, 상세, 리뷰작성

🛠 **클론 기능** : 로그인, 회원가입, 베너 슬라이드 쇼, 상품 리스트 뷰, 장바구니 모달창, 장바구니 CRUD, 리뷰 CRUD

➤ [사이트 바로가기](http://marketkkurly.s3-website.ap-northeast-2.amazonaws.com/)
➤ [시연영상 바로가기](https://youtu.be/7TeThbOcbZ4/)

## 📅 프로젝트 기간 및 팀원 👨🏻‍💻 👩‍💻

**2022.04.15 ~ 2022.04.21**

👨‍👦 **Front-End** : 강동현 정연재

👨‍👩‍👧 **Back-End** : 김승민 백승호 엄성훈

## ⛳️ 역할 담당

<details>
    <summary>정연재</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * 로그인 & 회원가입기능, 상세페이지, 리뷰CR(UD) 
  </details>
<details>
    <summary>강동현</summary>
    <!-- summary 아래 한칸 공백 두고 내용 삽입 -->
        * 메인 & 장바구니 & 검색 페이지, 장바구니CRUD
  </details>

## ⚔️ 기술 스택

**Front-End**
<br>
<p align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/axios-007CE2?style=for-the-badge&logo=axios&logoColor=white">
</br>
<img src="https://img.shields.io/badge/reactrouterdom-375BD2?style=for-the-badge&logo=reactrouterdom&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-181717?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## API 명세서

[Notion](https://www.notion.so/d6ccc5c59dd841da9532f1d70a8dac0a?v=ea74b86d8e3848bd85920b580faef273)

## 📜 페이지 설명

### 📎 로그인 페이지

<pre>
    - JWT 토큰을 활용하여 로그인기능 구현 
    - 로그인 체크시 username, nickname, address 유저정보 받아서 데이터관리 및 활용
    - 정상 로그인 시 페이지 이동 
</pre>

### 📎 회원가입 페이지

<pre>
    - 아이디 : 6~15자의 영소문자, 숫자의 조합
    - 비밀번호 : 8~16자의 영대소문자, 숫자, 특수문자의 조합
    - 아이디 중복 확인
    - 공란체크 
  
</pre>

### 📎 상세 & 리뷰페이지

<pre>
    - 메인에서 클릭한 상품에 대한 상세정보표시 
    - 제품 수량에따른 가격표시
    - 해당 상품에 대한 리뷰남기기 기능 
    - 해당 상품 리뷰작성페이지 구현
  
</pre>

### 📎 메인페이지 & 검색페이지

<pre>
    -장바구니 추가 버튼 : 장바구니에 이미 있는 제품의 장바구니 추가 버튼을 누르면 장바구니의 수량 증가
    -메인 페이지, 상세 페이지, 장바구니 추가 모두 로그인 하지 않아도 접근 가능
</pre>

### 📎 장바구니 페이지

<pre>
    - 장바구니에 담은 상품을 조회 (로그인 유저 & 비 로그인 유저)
        - 비 로그인 유저: localstorage로 장바구니 관리
        - 로그인 유저: 장바구니 API를 통한 관리
    - 장바구니 페이지 내에서 개수 +,- 수정 기능
    - 담을 제품 삭제 기능
</pre>
