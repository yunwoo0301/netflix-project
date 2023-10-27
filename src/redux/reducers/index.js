import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export default combineReducers({
    movie: movieReducer, // movieReducer가 combineReduces를 통해 전달됨
});