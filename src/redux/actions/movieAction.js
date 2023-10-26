import api from "../api";

function getMovies() { // movie 정보를 가져올 함수 생성 
    return async (dispatch) => {  // 미들웨어  - 함수가 함수를 리턴함
        const popularMovieApi = await api.get(`/movie/popular?language=en-US&page=1`) // api.http함수


        // let url = `/movie/popular?language=en-US&page=1`;
        // let response = await fetch(url);
        // let data = await response.json();

        // let url2 = `/movie/top_rated?language=en-US&page=1`;
        // let response2 = await fetch(url2);

        // let url3 = `/movie/upcoming?language=en-US&page=1`;
        // let res = await fetch(url3);
    };
}

export const movieAction = {
    getMovies,
};