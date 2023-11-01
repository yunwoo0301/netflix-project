import api from "../api";

function getTvshow() {
    return async (dispatch)=> {
        try { 
            dispatch({ type : "GET_TV_REQUEST" });

            const airingTodayApi = api.get(
                `/tv/airing_today?language=en-US&page=1`
        );

            const popularTvApi = api.get(
                `/tv/popular?language=en-US&page=1`
        );

            const topRatedTvApi = api.get(
                `tv/top_rated?language=en-US&page=1`
        );

            const genreTvApi= api.get(
                `/genre/tv/list?language=en`
        );

            let [airtodayTv, popularTv, topRatedTv, genreTvList] = await Promise.all([
                airingTodayApi,
                popularTvApi,
                topRatedTvApi,
                genreTvApi
        ]);

            console.log("genreTvList 알려줘", genreTvList);

            dispatch({
                type: "GET_TV_SUCCESS",
                payload: {
                    airtodayTv:airtodayTv.data,
                    popularTv:popularTv.data,
                    topRatedTv:topRatedTv.data,
                    genreTvList:genreTvList.data.genres,
                    loading: false,
                },
            });

        } catch (error) { // 에러 관리 구간
            dispatch({ type:"GET_TV_FAILURE" });
        }       
    };
};

export const tvshowAction = {
    getTvshow
};
