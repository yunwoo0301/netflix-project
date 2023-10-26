import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3", 
    headers:{"Content-Type":"application/json"} // 데이터 타입 명시
})

api.interceptors.request.use(function (config) {     // 요청이 전달되기 전에 작업 수행
    console.log("request start", config);
    return config;
  }, function (error) { // 요청 오류가 있는 작업 수행
    
    console.log("request error", error);
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
api.interceptors.response.use(
    function (response) { // 2xx 범위에 있는 상태 코드는 이 함수를 트리거, 
    
    console.log("get response", response); // 응답 데이터가 있는 작업 수행 출력
    return response;
  }, function (error) { // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거, 응답 오류가 있는 작업 수행

    console.log("response error", error);
    return Promise.reject(error);
  });

  export default api;