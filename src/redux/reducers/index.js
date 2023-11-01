import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import tvReducer from "./tvReducer";

export default combineReducers({
    movie: movieReducer, // movieReducer가 combineReduces를 통해 전달됨
    tv: tvReducer, // tvReducer 추가
});