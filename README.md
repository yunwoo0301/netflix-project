# Personal Project
 'React'와 'Axios' 비동기 통신 처리 방식 및 Redux 문법 공부 위주로 진행한 개인 미니 프로젝트

</br>

## 📖 개요
사용자(이용자)가 원하는 영화와 드라마 컨텐츠를 한 눈에 볼 수 있도록 만든 인기 OTT 플랫폼 “넷플릭스” 클론코딩 사이트

</br>

## 배포 주소
- 배포 사이트 : Netlify
- Web URL : https://yunoo-netflix.netlify.app/

## DEMO Capture
![Demo](https://file.notion.so/f/f/239050b2-b936-40ee-853c-b79f996a6356/31937e4f-25f0-42d0-a53e-bc6201a1fd77/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9.png?id=97c1d1fd-50d7-44c7-af31-401fdde48f0d&table=block&spaceId=239050b2-b936-40ee-853c-b79f996a6356&expirationTimestamp=1699084800000&signature=ARflRY2enqc4MFLpHmHDMiNGI6oVamURMrRN9prfa_s&downloadName=%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9.png)
![Demo](https://file.notion.so/f/f/239050b2-b936-40ee-853c-b79f996a6356/6ea353ff-d22a-40dd-b157-78f585bf5f2a/slide.gif?id=a843b83e-2362-4e46-a90a-3d57c2e7d4c9&table=block&spaceId=239050b2-b936-40ee-853c-b79f996a6356&expirationTimestamp=1699084800000&signature=VVIushkLQyfCIZBCmVptUDeGweV62XCAi7t0unz2CFA&downloadName=slide.gif)
![Demo](https://file.notion.so/f/f/239050b2-b936-40ee-853c-b79f996a6356/c17ab223-d076-498f-9479-a5c21f6c2ec2/trailer2.gif?id=08e0c72c-2892-4db1-8ec8-6256a116c432&table=block&spaceId=239050b2-b936-40ee-853c-b79f996a6356&expirationTimestamp=1699084800000&signature=I5O0qzyrh6ORdzUndV2PnOTRG8dmwacM9TvXrjrq4tw&downloadName=trailer2.gif)

<br />
<br />

</br>

## 🗓️ 개발 기간
- 개발 : 2023.10.28 ~ 2023.11.01

</br>

## 🎬 프로젝트 소개
- 기존 프로젝트와는 다른 또 하나의 상태 관리 라이브러리인 “Redux” 문법의 개념을 익히고자 만든 개인 프로젝트.
- 사이트의 세부 파트 중 데이터 API 연동과 리스트 위주인 메인 페이지 한 파트만 진행.
- Open API와 Axios 모듈 사이의 브라우저 데이터 연동과 인스턴스 방식을 활용한 Axios와 리덕스 미들웨어간의  API 호출을 통한 요청 및 응답 로직에 대한 개념 재확립을 목적으로 함.

</br>

## 🎀 프로젝트 주요 기능
- The Movie Database API(TMDB)를 호출하여 화면상에 데이터를 시각적으로 구현.
- Movie와 TV 시리즈 별 인기순 , 평점순, 방영순, 개봉(상영)예정순으로 정렬되어 있음.
- 유투브 모듈, 리액트 모달창을 활용해 영화 & TV 시리즈 선택 시 트레일러 영상 참조.
- 리액트 멀티 캐러셀을 이용한 슬라이드 기능과 Reveal을 통해 스크롤 시 이미지 Fade 효과 강조.
- 해당 컨텐츠 이미지 호버 시 타이틀, 장르, 평점, 인기도순 등 간략한 영화 정보를 볼 수 있도록 구현.

</br>

## 📍 개발 시 고민했던 점 & 알게된 점 

</br>

### 👒 1. 처음 영화 정보 데이터 API를 무비 리덕스에 저장 후 axios api를 불러올 시 401 에러
- 해결방법 >> axios 인스턴스 생성 중 Authorization 항목을 추가하지 않아 인가를 받지 못해 엑세스 권한 허용이 되지 않았던 것 / 추가 후 정상 api 호출됨.
<img src="https://file.notion.so/f/f/239050b2-b936-40ee-853c-b79f996a6356/a29da217-48d8-486d-a7fa-ee3581970f62/Untitled.png?id=ee59dbf4-749a-4d4c-bd9b-907112e9d629&table=block&spaceId=239050b2-b936-40ee-853c-b79f996a6356&expirationTimestamp=1699084800000&signature=DOaCpLglFnNOV9G0CChPVHnrfoLX6BHlUuspn_ypMRA&downloadName=Untitled.png">

</br>

### 👚 2. 멀티 캐러셀 모듈 통해 슬라이드 확대 기능은 구현했으나 높이 조절 제한 문제점 발생
- height 높이 지정 & !import 적용했으나  width 값과 영화정보만 재차 스케일 효과 여전히 높이값은 고정됨. >> 마우스 호버 시 background 오버레이 효과로 영화정보 대체

✔️ 차후 모듈 적용 X 직접 캐러셀 구현 후 높이 조절 진행 보완 필요.

</br>

### 👝 3. 장르 데이터의 id 값을 name으로 변환 시 리스트는 가져와졌으나 id명으로 계속 확인될 때
- 장르의 네임 작업은 1차 데이터 id  >> 2차 네임 변경 작업이므로 액션 코드 진행 시 Json Data 내 results 값의 genres 항목을 덧붙어야 필터링 진행됨 확인.
<img src="https://file.notion.so/f/f/239050b2-b936-40ee-853c-b79f996a6356/a79c8566-a5ba-43cc-8a7e-ec1d59dacae6/Untitled.png?id=afc268e5-eef7-4cc0-a338-6890f338e4b0&table=block&spaceId=239050b2-b936-40ee-853c-b79f996a6356&expirationTimestamp=1699092000000&signature=GIvBywgQvT0_2Nz8OIxwJ-CqLyggo0I7E6xVMRxKCa0&downloadName=Untitled.png">

</br>

### 👡 4. youtube 트레일러 영상 모달창 삽입 시 undefined 발생
- 동영상 데이터 렌더링 시 배열에 데이터 값이 없을 수 있으므로 videoId에 데이터의 결과값 O & 배열의 값 여부에 따라 조건부 렌더링 적용 시 해결됨.
<img src="https://file.notion.so/f/f/239050b2-b936-40ee-853c-b79f996a6356/909c33b2-16e2-4d37-87ef-ac391a09f778/Untitled.png?id=9dd4accb-572f-440b-9d1b-fa3b8493b67f&table=block&spaceId=239050b2-b936-40ee-853c-b79f996a6356&expirationTimestamp=1699092000000&signature=aXUhPeT4BBvD3-GjBw9zoybLluzhJZEssLowdKyDsKY&downloadName=Untitled.png">

</br>

## :hammer_and_wrench: 개발 환경 및 기술 스택
- Language : JavaScript ES6
- Library : React, Redux, Axios, Router
- Animation : React-Multi-Carousel, Reveal, Modal, Youtube, Spinner
- API : TMDB(The Movie Database API)
