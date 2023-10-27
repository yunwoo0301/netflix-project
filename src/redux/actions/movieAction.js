import api from '../api';

const API_KEY = process.env.React_APP_API_KEY;

function getMovies() { // movie 정보를 가져올 함수 생성 
    return async (dispatch) => {  // 미들웨어  - 함수가 함수를 리턴함
        try { // error handling 위해 try - catch문 활용
            dispatch({ type: "GET_MOVIES_REQUEST" });
            const popularMovieApi = api.get( // api.http함수
            `/movie/popular?&language=en-US&page=1`
        );

        const topRatedApi = api.get(
            `/movie/top_rated?language=en-US&page=1`
        );

        const upComingApi = api.get(
            `/movie/upcoming?language=en-US&page=1`
        );


        let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
            popularMovieApi, 
            topRatedApi, 
            upComingApi,
        ]);
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: { 
                    popularMovies:popularMovies.data, 
                    topRatedMovies:topRatedMovies.data, 
                    upComingMovies:upComingMovies.data,
                    loading: false,
                },
            });
        
        } catch (error) { // 에러 관리 구간
            dispatch({ type:"GET_MOVIES_FAILURE" });
        }       
    };
}

export const movieAction = {
    getMovies,
};