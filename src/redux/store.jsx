import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)),
    window.devToolsExtension && window.devToolsExtension() // Redux devTools와 브라우저의 개발자 도구 연동 code
);

export default store;
