let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upComingMovies: {},
    loading: true,
    genreList: [], // 장르 리스트 추가
    movieDetail: {}, // 영화 상세정보 추가
    movieTrailer:{}, // 영화 예고편 추가
};


function movieReducer(state = initialState, action) {
    let { type, payload } = action;
    switch(type) {
        case "GET_MOVIES_REQUEST":
            return {...state, loading: true};

        case "GET_MOVIES_SUCCESS":
            return {
                ...state, 
                popularMovies: payload.popularMovies, 
                topRatedMovies: payload.topRatedMovies,
                upComingMovies: payload.upComingMovies,
                genreList: payload.genreList,
                movieDetail: payload.movieDetail, // 영화 상세정보 추가
                movieTrailer: payload.movieTrailer, // 영화 예고편 추가
                loading: false,
            };

        
        case "GET_MOVIES_FAILURE":
            return {...state, loading: false};
            
            default:
                return { ...state};
    }
}

export default movieReducer;