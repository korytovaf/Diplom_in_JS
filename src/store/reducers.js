import {combineReducers} from "redux";
import {authReducers} from "./auth/redusers";
import photosReducers from "./photos/redusers";

export default combineReducers({
    photos: photosReducers,
    auth: authReducers,
})