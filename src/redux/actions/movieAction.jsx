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

            const genreApi = api.get(
            `/genre/movie/list?language=en`
        );


        let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([
            popularMovieApi, 
            topRatedApi, 
            upComingApi,
            genreApi,
        ]);

        console.log("genreList?", genreList);

            
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

function getDetail({id}) { // 영화 상세 정보 Api 함수
    return async(dispatch) => {
        try{
            dispatch({type:"GET_MOVIES_DETAIL_REQUEST", payload:{id}})

            const detailApi = api.get(
                `/movie/${id}?api_key=${API_KEY}&language=en-US`
            );

            const trailerApi = api.get(
                `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
            );
            
            let [movieDetail, movieTrailer] = await Promise.all([
                detailApi,
                trailerApi,
            ]);

            dispatch({
                type:"GET_MOVIES_DETAIL_SUCCESS",
               
                payload:{
                    movieDetail:movieDetail.data,
                    movieTrailer:movieTrailer.data,
                }
            });

        }catch(error){
            dispatch({type:"GET_MOVIES_FAILURE"})
        }
    }
} 


export const movieAction = {
    getMovies, getDetail
};