let initialState = {
    airtodayTv: {},
    popularTv: {},
    topRatedTv: {},
    genreTvList: [], 
};

function tvReducer(state = initialState, action) {
    let { type, payload } = action;
    switch(type) {
        case "GET_TV_REQUEST":
            return {...state, loading: true};

        case "GET_TV_SUCCESS":
            return {
                ...state, 
                airtodayTv: payload.airtodayTv,
                popularTv: payload.popularTv,
                topRatedTv: payload.topRatedTv,
                genreTvList: payload.genreTvList,
                loading: false,
            };

            case "GET_MOVIES_FAILURE":
                return {...state, loading: false};
                
                default:
                    return { ...state};
        }
    }

export default tvReducer;
