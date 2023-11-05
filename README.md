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
![netflix-project](https://github.com/yunwoo0301/netflix-project/assets/121915009/48294869-ec3e-4a46-be20-b60c38d2b9bc)
![netflix-project2](https://github.com/yunwoo0301/netflix-project/assets/121915009/c210c1f6-5d05-41a5-8527-65eeaf4781fb)
![netflix-project3](https://github.com/yunwoo0301/netflix-project/assets/121915009/fb7b7e3b-a3ae-4a74-bbe0-06aad99804b2)

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

```
 const api = axios.create({
    baseURL:"https://api.themoviedb.org/3", 
    headers:{
      "Content-type":"application/json", // 데이터 타입 명시
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzhkMjVkYWE4MGI3ZDE3ODE2YjEwZmQ3NmQ0NzgwYyIsInN1YiI6IjY1M2E4Nzg4ZDIxNDdjMDEzOTQ4YTE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OgmlWFc-E4dd-OY6kH_o5nyIEQMULTLfex5r70xZ-KM"}
})

```
</br>

### 👚 2. 멀티 캐러셀 모듈 통해 슬라이드 확대 기능은 구현했으나 높이 조절 제한 문제점 발생
- height 높이 지정 & !import 적용했으나  width 값과 영화정보만 재차 스케일 효과 여전히 높이값은 고정됨. >> 마우스 호버 시 background 오버레이 효과로 영화정보 대체

✔️ 차후 모듈 적용 X 직접 캐러셀 구현 후 높이 조절 진행 보완 필요.

</br>

### 👝 3. 장르 데이터의 id 값을 name으로 변환 시 리스트는 가져와졌으나 id명으로 계속 확인될 때
- 장르의 네임 작업은 1차 데이터 id  >> 2차 네임 변경 작업이므로 액션 코드 진행 시 Json Data 내 results 값의 genres 항목을 덧붙어야 필터링 진행됨 확인.

```
dispatch({
    type: "GET_MOVIES_SUCCESS",
    payload: {   //axios가 받은 데이터를 data필드에 넣어서 호출
        popularMovies:popularMovies.data, 
        topRatedMovies:topRatedMovies.data, 
        upComingMovies:upComingMovies.data,
        genreList:genreList.data.genres,
        loading: false,
	      },
	  });
	
	    } catch (error) { // 에러 관리 구간
	        dispatch({ type:"GET_MOVIES_FAILURE" });
	  }       
	};
};
```

</br>

### 👡 4. youtube 트레일러 영상 모달창 삽입 시 undefined 발생
- 동영상 데이터 렌더링 시 배열에 데이터 값이 없을 수 있으므로 videoId에 데이터의 결과값 O & 배열의 값 여부에 따라 조건부 렌더링 적용 시 해결됨.

```
<div className="trailer" >
    <YouTube
        videoId={video.results && video.results.length > 0 ? video.results[0].key : null}
        autoPlay
        opts={{
            width:"1800",
            height: "800",
            playerVars: {
            autoplay: 1,         //자동재생 O
            rel: 0,             //관련 동영상 표시 X
            modestbranding: 1, // 컨트롤 바에 youtube 로고 표시 X
            },
        }}
    />
</div>
```
</br>

## :hammer_and_wrench: 개발 환경 및 기술 스택
- Language : JavaScript ES6
- Library : React, Redux, Axios, Router
- Animation : React-Multi-Carousel, Reveal, Modal, Youtube, Spinner
- API : TMDB(The Movie Database API)
